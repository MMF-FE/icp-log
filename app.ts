/**
 * app 启动文件
 * @author vfasky<vfasky@gmail.com>
 **/
import { Application } from 'egg'
import eggTypeorm from './egg-typeorm'

export default async (app: Application) => {
    if (app.config.typeorm) {
        await eggTypeorm(app)
    }
}