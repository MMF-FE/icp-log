import { Controller } from 'egg';
import IgnoreKeywordReq, { IgnoreKeyword } from '../model/entity/IgnoreKeyword'
import UserReq from '../model/entity/User'
import SessionReq, { Session } from '../model/entity/Session'
import MemberLogReq from '../model/entity/MemberLog'
import * as faker from 'faker'

const loginRule = {
    name: 'string',
    password: 'string'
}

const igKwRule = {
    keyword: 'string'
}

export default class ApiController extends Controller {

    public async login() {
        let data: {
            name: string
            password: string
        } = this.ctx.request.body
        this.ctx.validate(loginRule, data)
        let user = await UserReq().findOne({
            where: {
                name: data.name.trim()
            }
        })

        if (!user || this.ctx.helper.sha1(data.password) !== user.password) {
            this.ctx.body = {
                success: false,
                msg: '用户名或密码错误'
            }
            return
        }

        delete user.password

        let session = await SessionReq().findOne({
            user
        })

        if (!session) {
            session = new Session()
            session.user = user
            session.token = faker.random.uuid()
            await SessionReq().save(session)
        }

        this.ctx.body = {
            ...user,
            token: session.token,
            success: true
        }
    }

    private async checkToken() {
        let token = this.ctx.request.header.token
        if (!token) {
            this.ctx.throw(403)
        }
        let total = await SessionReq().count({
            token: token
        })
        if (total === 0) {
            this.ctx.throw(403)
        }
    }

    public async memberLogList() {
        await this.checkToken()
        let res = await MemberLogReq().find()
        this.ctx.body = {
            success: true,
            data: res
        }

    }

    public async ignoreList() {
        await this.checkToken()
        let res = await IgnoreKeywordReq().find()
        this.ctx.body = {
            success: true,
            data: res
        }
    }

    public async addIgnoreKeyword() {
        await this.checkToken()

        let data: {
            keyword: string
        } = this.ctx.request.body
        this.ctx.validate(igKwRule, data)

        let keyword = data.keyword.trim()

        if (0 !== await IgnoreKeywordReq().count({
            keyword
        })) {
            this.ctx.body = {
                success: false,
                msg: '敏感词已存在'
            }

            return
        }

        let igKw = new IgnoreKeyword()
        igKw.keyword = keyword
        igKw.creatDate = new Date()
        igKw = await IgnoreKeywordReq().save(igKw)

        this.ctx.body = {
            success: true,
            ...igKw
        }

    }

}