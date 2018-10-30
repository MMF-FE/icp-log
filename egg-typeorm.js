"use strict";
/**
 * 数据库连接
 * @author vfasky<vfasky@gmail.com>
 **/
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const typeorm_1 = require("typeorm");
exports.default = async (app) => {
    const config = app.config.typeorm;
    // 连接 数据库
    assert(config.type && config.database, `[typeorm] 'host: ${config.type}', 'database: ${config.database}' are required on config`);
    const connection = await typeorm_1.createConnection(config);
    // @ts-ignore
    app.typeorm = connection;
    let count = 1;
    app.beforeStart(async function startQuery() {
        const rows = await connection.manager.query('select 1 as column1;');
        const index = count++;
        app.coreLogger.info(`[typeorm] instance[${index}] status OK, rds currentTime: ${rows[0].currentTime}`);
    });
    return connection;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWdnLXR5cGVvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlZ2ctdHlwZW9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OztJQUdJOztBQUlKLGlDQUFnQztBQUNoQyxxQ0FBNkQ7QUFFN0Qsa0JBQWUsS0FBSyxFQUFFLEdBQWdCLEVBQUUsRUFBRTtJQUN0QyxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQTRCLENBQUE7SUFFdEQsU0FBUztJQUNULE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQ2pDLG9CQUFvQixNQUFNLENBQUMsSUFBSSxpQkFBaUIsTUFBTSxDQUFDLFFBQVEsMEJBQTBCLENBQUMsQ0FBQTtJQUc5RixNQUFNLFVBQVUsR0FBRyxNQUFNLDBCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRWpELGFBQWE7SUFDYixHQUFHLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQTtJQUV4QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUE7SUFDYixHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssVUFBVSxVQUFVO1FBQ3JDLE1BQU0sSUFBSSxHQUFHLE1BQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUNuRSxNQUFNLEtBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQTtRQUNyQixHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsS0FBSyxpQ0FBaUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUE7SUFDMUcsQ0FBQyxDQUFDLENBQUE7SUFFRixPQUFPLFVBQVUsQ0FBQTtBQUNyQixDQUFDLENBQUEifQ==