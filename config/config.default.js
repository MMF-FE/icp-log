"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
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
    const bizConfig = {
        typeorm: {
            type: 'sqlite',
            database: 'database.sqlite',
            synchronize: false,
            logging: false,
            entities: [
                __dirname + '/../app/model/entity/**/*{.ts,.js}'
            ],
            migrations: [
                __dirname + '/../app/model/migration/**/*{.ts,.js}'
            ],
            subscribers: [
                __dirname + '/../app/model/subscriber/**/*{.ts,.js}'
            ],
        }
    };
    // the return config will combines to EggAppConfig
    return Object.assign({}, config, bizConfig);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDZCQUE0QjtBQUU1QixrQkFBZSxDQUFDLE9BQW1CLEVBQUUsRUFBRTtJQUNuQyxNQUFNLE1BQU0sR0FBRyxFQUFnQyxDQUFBO0lBRS9DLDBDQUEwQztJQUMxQyx1RUFBdUU7SUFDdkUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFBO0lBRWxELDhCQUE4QjtJQUM5QixNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQTtJQUV0QixNQUFNLENBQUMsUUFBUSxHQUFHO1FBQ2QsSUFBSSxFQUFFO1lBQ0YsTUFBTSxFQUFFLEtBQUs7U0FDaEI7S0FDSixDQUFBO0lBRUQsTUFBTSxDQUFDLE1BQU0sR0FBRztRQUNaLE1BQU0sRUFBRSxHQUFHO1FBQ1gsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7S0FDOUMsQ0FBQTtJQUVELGtDQUFrQztJQUNsQyxNQUFNLFNBQVMsR0FBRztRQUNkLE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRSxRQUFRO1lBQ2QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsS0FBSztZQUNsQixPQUFPLEVBQUUsS0FBSztZQUNkLFFBQVEsRUFBRTtnQkFDTixTQUFTLEdBQUcsb0NBQW9DO2FBQ25EO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLFNBQVMsR0FBRyx1Q0FBdUM7YUFDdEQ7WUFDRCxXQUFXLEVBQUU7Z0JBQ1QsU0FBUyxHQUFHLHdDQUF3QzthQUN2RDtTQUVKO0tBQ0osQ0FBQTtJQUVELGtEQUFrRDtJQUNsRCx5QkFDTyxNQUFNLEVBQ04sU0FBUyxFQUNmO0FBQ0wsQ0FBQyxDQUFBIn0=