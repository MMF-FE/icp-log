import { Controller } from 'egg'
import * as fs from 'fs'
import * as path from 'path'

export default class HomeController extends Controller {
    public async index() {
        let htmlDir = path.join(this.config.baseDir, 'fe/dist/index.html')
        this.ctx.body = fs.readFileSync(htmlDir, 'utf8')
    }
}
