/**
 * 安装脚本
 * @author vfasky<vfasky@gmail.com>
 **/

import getConfig from './config/config.default'
import helper from './app/extend/helper'

import * as assert from 'assert'
import { createConnection, ConnectionOptions } from 'typeorm'
import UserRep, { User } from './app/model/entity/User'
import MemberLogReq, { MemberLog } from './app/model/entity/MemberLog'
import IgnoreKeywordReq, { IgnoreKeyword } from './app/model/entity/IgnoreKeyword'
import fetch from 'node-fetch'
import * as faker from 'faker'

// @ts-ignore
const appConfig = getConfig({
    name: 'icp-log'
})

const config = appConfig.typeorm as ConnectionOptions

// 连接 数据库
assert(config.type && config.database ,
    `[typeorm] 'host: ${config.type}', 'database: ${config.database}' are required on config`)

async function main() {
    // @ts-ignore
    config.synchronize = true
    await createConnection(config)

    let userTotal = await UserRep().count()
    if (userTotal !== 0) {
        throw new Error(`Install Error, User count ${userTotal}`)
    }

    // 添加管理员
    let user = new User()
    user.name = 'admin'
    user.password = helper.sha1('admin666')
    await UserRep().save(user)

    // 添加用户日志
    for (let i = 0; i < 200; i++) {
        let log = new MemberLog()
        log.name = faker.name.findName()
        log.account = faker.finance.account()
        log.email = faker.internet.email()
        log.loginDateTime = faker.date.past()
        log.ip = faker.internet.ip()
        await MemberLogReq().save(log)
    }

    // 添加敏感词
    let txt: string = await fetch('https://gist.githubusercontent.com/soulmachine/269b0302acaa161b470e67f2ff243646/raw/0aed563195748dc48b4e71cbb04f3c1432f4565c/gistfile1.txt').then(v => v.text())
    let keywords = txt.split('\n').map(v => v.trim()).filter(v => v.length > 1)
    for (let v of keywords) {
        let igKw = new IgnoreKeyword()
        igKw.keyword = v
        igKw.creatDate = faker.date.past()
        await IgnoreKeywordReq().save(igKw)
    }
}

main()