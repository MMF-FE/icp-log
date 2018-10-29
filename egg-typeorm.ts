/**
 * 数据库连接
 * @author vfasky<vfasky@gmail.com>
 **/

import { Application } from 'egg'

import * as assert from 'assert'
import { createConnection, ConnectionOptions } from 'typeorm'

export default async (app: Application) => {
    const config = app.config.typeorm as ConnectionOptions

    // 连接 数据库
    assert(config.type && config.database ,
        `[typeorm] 'host: ${config.type}', 'database: ${config.database}' are required on config`)


    const connection = await createConnection(config)
    
    // @ts-ignore
    app.typeorm = connection

    let count = 1
    app.beforeStart(async function startQuery() {
        const rows = await connection.manager.query('select 1 as column1;')
        const index = count++
        app.coreLogger.info(`[typeorm] instance[${index}] status OK, rds currentTime: ${rows[0].currentTime}`)
    })

    return connection
}