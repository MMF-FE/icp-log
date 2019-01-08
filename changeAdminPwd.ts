/**
 * 更改管理员密码
 * @author vfasky<vfasky@gmail.com>
 **/

import { bizConfig } from './config/config.default'
import helper from './app/extend/helper'
import * as assert from 'assert'
import { createConnection, ConnectionOptions } from 'typeorm'
import UserRep from './app/model/entity/User'


// 要修改的密码
const password = 'F9d!@Ksd'

// @ts-ignore
const appConfig = bizConfig

const config = appConfig.typeorm as ConnectionOptions

// 连接 数据库
assert(config.type && config.database ,
    `[typeorm] 'host: ${config.type}', 'database: ${config.database}' are required on config`)

async function main() {
    await createConnection(config)

    let user = await UserRep().findOne({
        where: {
            name: 'admin'
        }
    })
    if (user) {
        user.password = helper.sha1(password)
        await UserRep().save(user)
        console.log('change password success')
    }
}

main()