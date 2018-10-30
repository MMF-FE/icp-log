"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const fs = require("fs");
const path = require("path");
class HomeController extends egg_1.Controller {
    async index() {
        let htmlDir = path.join(this.config.baseDir, 'fe/dist/index.html');
        this.ctx.body = fs.readFileSync(htmlDir, 'utf8');
    }
}
exports.default = HomeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBZ0M7QUFDaEMseUJBQXdCO0FBQ3hCLDZCQUE0QjtBQUU1QixNQUFxQixjQUFlLFNBQVEsZ0JBQVU7SUFDM0MsS0FBSyxDQUFDLEtBQUs7UUFDZCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUE7UUFDbEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDcEQsQ0FBQztDQUNKO0FBTEQsaUNBS0MifQ==