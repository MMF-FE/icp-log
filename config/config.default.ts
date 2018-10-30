import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'
import * as path from 'path'

export const bizConfig = {
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
}

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1540784741620_6137'

    // add your egg config in here
    config.middleware = []

    config.security = {
        csrf: {
            enable: false,
        },
    }

    config.static = {
        prefix: '/',
        dir: path.join(appInfo.baseDir, 'fe/dist/')
    }

    // add your special config in here

    // the return config will combines to EggAppConfig
    return {
        ...config,
        ...bizConfig,
    }
}
