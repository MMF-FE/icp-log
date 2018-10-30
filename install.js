"use strict";
/**
 * 安装脚本
 * @author vfasky<vfasky@gmail.com>
 **/
Object.defineProperty(exports, "__esModule", { value: true });
const config_default_1 = require("./config/config.default");
const helper_1 = require("./app/extend/helper");
const assert = require("assert");
const typeorm_1 = require("typeorm");
const User_1 = require("./app/model/entity/User");
const MemberLog_1 = require("./app/model/entity/MemberLog");
const IgnoreKeyword_1 = require("./app/model/entity/IgnoreKeyword");
const node_fetch_1 = require("node-fetch");
const faker = require("faker");
// @ts-ignore
const appConfig = config_default_1.bizConfig;
const config = appConfig.typeorm;
// 连接 数据库
assert(config.type && config.database, `[typeorm] 'host: ${config.type}', 'database: ${config.database}' are required on config`);
async function main() {
    // @ts-ignore
    config.synchronize = true;
    await typeorm_1.createConnection(config);
    let userTotal = await User_1.default().count();
    if (userTotal !== 0) {
        throw new Error(`Install Error, User count ${userTotal}`);
    }
    // 添加管理员
    let user = new User_1.User();
    user.name = 'admin';
    user.password = helper_1.default.sha1('admin666');
    await User_1.default().save(user);
    // 添加用户日志
    for (let i = 0; i < 200; i++) {
        let log = new MemberLog_1.MemberLog();
        log.name = faker.name.findName();
        log.account = faker.finance.account();
        log.email = faker.internet.email();
        log.loginDateTime = faker.date.past();
        log.ip = faker.internet.ip();
        await MemberLog_1.default().save(log);
    }
    // 添加敏感词
    let txt = await node_fetch_1.default('https://gist.githubusercontent.com/soulmachine/269b0302acaa161b470e67f2ff243646/raw/0aed563195748dc48b4e71cbb04f3c1432f4565c/gistfile1.txt').then(v => v.text());
    let keywords = txt.split('\n').map(v => v.trim()).filter(v => v.length > 1);
    for (let v of keywords) {
        let igKw = new IgnoreKeyword_1.IgnoreKeyword();
        igKw.keyword = v;
        igKw.creatDate = faker.date.past();
        await IgnoreKeyword_1.default().save(igKw);
    }
}
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluc3RhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7SUFHSTs7QUFFSiw0REFBbUQ7QUFDbkQsZ0RBQXdDO0FBRXhDLGlDQUFnQztBQUNoQyxxQ0FBNkQ7QUFDN0Qsa0RBQXVEO0FBQ3ZELDREQUFzRTtBQUN0RSxvRUFBa0Y7QUFDbEYsMkNBQThCO0FBQzlCLCtCQUE4QjtBQUU5QixhQUFhO0FBQ2IsTUFBTSxTQUFTLEdBQUcsMEJBQVMsQ0FBQTtBQUUzQixNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsT0FBNEIsQ0FBQTtBQUVyRCxTQUFTO0FBQ1QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLFFBQVEsRUFDakMsb0JBQW9CLE1BQU0sQ0FBQyxJQUFJLGlCQUFpQixNQUFNLENBQUMsUUFBUSwwQkFBMEIsQ0FBQyxDQUFBO0FBRTlGLEtBQUssVUFBVSxJQUFJO0lBQ2YsYUFBYTtJQUNiLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO0lBQ3pCLE1BQU0sMEJBQWdCLENBQUMsTUFBTSxDQUFDLENBQUE7SUFFOUIsSUFBSSxTQUFTLEdBQUcsTUFBTSxjQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN2QyxJQUFJLFNBQVMsS0FBSyxDQUFDLEVBQUU7UUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsU0FBUyxFQUFFLENBQUMsQ0FBQTtLQUM1RDtJQUVELFFBQVE7SUFDUixJQUFJLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFBO0lBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFBO0lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDdkMsTUFBTSxjQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFMUIsU0FBUztJQUNULEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDMUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUE7UUFDekIsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2hDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNyQyxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDbEMsR0FBRyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ3JDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQTtRQUM1QixNQUFNLG1CQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDakM7SUFFRCxRQUFRO0lBQ1IsSUFBSSxHQUFHLEdBQVcsTUFBTSxvQkFBSyxDQUFDLDRJQUE0SSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7SUFDL0wsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQzNFLEtBQUssSUFBSSxDQUFDLElBQUksUUFBUSxFQUFFO1FBQ3BCLElBQUksSUFBSSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFBO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNsQyxNQUFNLHVCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0tBQ3RDO0FBQ0wsQ0FBQztBQUVELElBQUksRUFBRSxDQUFBIn0=