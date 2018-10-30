"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
exports.bizConfig = {
    typeorm: {
        type: 'sqlite',
        database: 'database.sqlite',
        synchronize: false,
        logging: false,
        entities: [
            __dirname + '/../app/model/entity/**/*.js'
        ],
        migrations: [
            __dirname + '/../app/model/migration/**/*.js'
        ],
        subscribers: [
            __dirname + '/../app/model/subscriber/**/*.js'
        ],
    }
};
exports.default = (appInfo) => {
    const config = {};
    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1540784741620_6137';
    // add your egg config in here
    config.middleware = [];
    config.security = {
        csrf: {
            enable: false,
        },
    };
    config.static = {
        prefix: '/',
        dir: path.join(appInfo.baseDir, 'fe/dist/')
    };
    // add your special config in here
    // the return config will combines to EggAppConfig
    return Object.assign({}, config, exports.bizConfig);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDZCQUE0QjtBQUVmLFFBQUEsU0FBUyxHQUFHO0lBQ3JCLE9BQU8sRUFBRTtRQUNMLElBQUksRUFBRSxRQUFRO1FBQ2QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsS0FBSztRQUNkLFFBQVEsRUFBRTtZQUNOLFNBQVMsR0FBRyw4QkFBOEI7U0FDN0M7UUFDRCxVQUFVLEVBQUU7WUFDUixTQUFTLEdBQUcsaUNBQWlDO1NBQ2hEO1FBQ0QsV0FBVyxFQUFFO1lBQ1QsU0FBUyxHQUFHLGtDQUFrQztTQUNqRDtLQUVKO0NBQ0osQ0FBQTtBQUVELGtCQUFlLENBQUMsT0FBbUIsRUFBRSxFQUFFO0lBQ25DLE1BQU0sTUFBTSxHQUFHLEVBQWdDLENBQUE7SUFFL0MsMENBQTBDO0lBQzFDLHVFQUF1RTtJQUN2RSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUE7SUFFbEQsOEJBQThCO0lBQzlCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFBO0lBRXRCLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDZCxJQUFJLEVBQUU7WUFDRixNQUFNLEVBQUUsS0FBSztTQUNoQjtLQUNKLENBQUE7SUFFRCxNQUFNLENBQUMsTUFBTSxHQUFHO1FBQ1osTUFBTSxFQUFFLEdBQUc7UUFDWCxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztLQUM5QyxDQUFBO0lBRUQsa0NBQWtDO0lBRWxDLGtEQUFrRDtJQUNsRCx5QkFDTyxNQUFNLEVBQ04saUJBQVMsRUFDZjtBQUNMLENBQUMsQ0FBQSJ9