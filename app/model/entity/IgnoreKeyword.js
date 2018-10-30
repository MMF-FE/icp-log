"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let IgnoreKeyword = class IgnoreKeyword {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], IgnoreKeyword.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        unique: true
    }),
    tslib_1.__metadata("design:type", String)
], IgnoreKeyword.prototype, "keyword", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Date)
], IgnoreKeyword.prototype, "creatDate", void 0);
IgnoreKeyword = tslib_1.__decorate([
    typeorm_1.Entity()
], IgnoreKeyword);
exports.IgnoreKeyword = IgnoreKeyword;
exports.default = () => typeorm_1.getRepository(IgnoreKeyword);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWdub3JlS2V5d29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIklnbm9yZUtleXdvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQTZFO0FBRzdFLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7Q0FjekIsQ0FBQTtBQVhHO0lBREMsZ0NBQXNCLEVBQUU7O3lDQUNmO0FBS1Y7SUFIQyxnQkFBTSxDQUFDO1FBQ0osTUFBTSxFQUFFLElBQUk7S0FDZixDQUFDOzs4Q0FDYTtBQUdmO0lBREMsZ0JBQU0sRUFBRTtzQ0FDRSxJQUFJO2dEQUFBO0FBWE4sYUFBYTtJQUR6QixnQkFBTSxFQUFFO0dBQ0ksYUFBYSxDQWN6QjtBQWRZLHNDQUFhO0FBZ0IxQixrQkFBZSxHQUFHLEVBQUUsQ0FBQyx1QkFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFBIn0=