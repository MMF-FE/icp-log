"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const IgnoreKeyword_1 = require("../model/entity/IgnoreKeyword");
const User_1 = require("../model/entity/User");
const Session_1 = require("../model/entity/Session");
const MemberLog_1 = require("../model/entity/MemberLog");
const faker = require("faker");
const loginRule = {
    name: 'string',
    password: 'string'
};
const igKwRule = {
    keyword: 'string'
};
class ApiController extends egg_1.Controller {
    async login() {
        let data = this.ctx.request.body;
        this.ctx.validate(loginRule, data);
        let user = await User_1.default().findOne({
            where: {
                name: data.name.trim()
            }
        });
        if (!user || this.ctx.helper.sha1(data.password) !== user.password) {
            this.ctx.body = {
                success: false,
                msg: '用户名或密码错误'
            };
            return;
        }
        delete user.password;
        let session = await Session_1.default().findOne({
            user
        });
        if (!session) {
            session = new Session_1.Session();
            session.user = user;
            session.token = faker.random.uuid();
            await Session_1.default().save(session);
        }
        this.ctx.body = Object.assign({}, user, { token: session.token, success: true });
    }
    async checkToken() {
        let token = this.ctx.request.header.token;
        if (!token) {
            this.ctx.throw(403);
        }
        let total = await Session_1.default().count({
            token: token
        });
        if (total === 0) {
            this.ctx.throw(403);
        }
    }
    async memberLogList() {
        await this.checkToken();
        let res = await MemberLog_1.default().find();
        this.ctx.body = {
            success: true,
            data: res
        };
    }
    async ignoreList() {
        await this.checkToken();
        let res = await IgnoreKeyword_1.default().find({
            order: {
                id: 'DESC'
            }
        });
        this.ctx.body = {
            success: true,
            data: res
        };
    }
    async addIgnoreKeyword() {
        await this.checkToken();
        let data = this.ctx.request.body;
        this.ctx.validate(igKwRule, data);
        let keyword = data.keyword.trim();
        if (0 !== await IgnoreKeyword_1.default().count({
            keyword
        })) {
            this.ctx.body = {
                success: false,
                msg: '敏感词已存在'
            };
            return;
        }
        let igKw = new IgnoreKeyword_1.IgnoreKeyword();
        igKw.keyword = keyword;
        igKw.creatDate = new Date();
        igKw = await IgnoreKeyword_1.default().save(igKw);
        this.ctx.body = Object.assign({ success: true }, igKw);
    }
}
exports.default = ApiController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQWlDO0FBQ2pDLGlFQUErRTtBQUMvRSwrQ0FBMEM7QUFDMUMscURBQTZEO0FBQzdELHlEQUFvRDtBQUNwRCwrQkFBOEI7QUFFOUIsTUFBTSxTQUFTLEdBQUc7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLFFBQVEsRUFBRSxRQUFRO0NBQ3JCLENBQUE7QUFFRCxNQUFNLFFBQVEsR0FBRztJQUNiLE9BQU8sRUFBRSxRQUFRO0NBQ3BCLENBQUE7QUFFRCxNQUFxQixhQUFjLFNBQVEsZ0JBQVU7SUFFMUMsS0FBSyxDQUFDLEtBQUs7UUFDZCxJQUFJLElBQUksR0FHSixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUE7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2xDLElBQUksSUFBSSxHQUFHLE1BQU0sY0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQy9CLEtBQUssRUFBRTtnQkFDSCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7YUFDekI7U0FDSixDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRztnQkFDWixPQUFPLEVBQUUsS0FBSztnQkFDZCxHQUFHLEVBQUUsVUFBVTthQUNsQixDQUFBO1lBQ0QsT0FBTTtTQUNUO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO1FBRXBCLElBQUksT0FBTyxHQUFHLE1BQU0saUJBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNyQyxJQUFJ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