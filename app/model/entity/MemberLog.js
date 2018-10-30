"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let MemberLog = class MemberLog {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], MemberLog.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], MemberLog.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], MemberLog.prototype, "account", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Date)
], MemberLog.prototype, "loginDateTime", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], MemberLog.prototype, "ip", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], MemberLog.prototype, "email", void 0);
MemberLog = tslib_1.__decorate([
    typeorm_1.Entity()
], MemberLog);
exports.MemberLog = MemberLog;
exports.default = () => typeorm_1.getRepository(MemberLog);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtYmVyTG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTWVtYmVyTG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUE2RTtBQUc3RSxJQUFhLFNBQVMsR0FBdEIsTUFBYSxTQUFTO0NBb0JyQixDQUFBO0FBakJHO0lBREMsZ0NBQXNCLEVBQUU7O3FDQUNmO0FBR1Y7SUFEQyxnQkFBTSxFQUFFOzt1Q0FDRztBQUdaO0lBREMsZ0JBQU0sRUFBRTs7MENBQ007QUFHZjtJQURDLGdCQUFNLEVBQUU7c0NBQ00sSUFBSTtnREFBQTtBQUduQjtJQURDLGdCQUFNLEVBQUU7O3FDQUNDO0FBR1Y7SUFEQyxnQkFBTSxFQUFFOzt3Q0FDSTtBQWxCSixTQUFTO0lBRHJCLGdCQUFNLEVBQUU7R0FDSSxTQUFTLENBb0JyQjtBQXBCWSw4QkFBUztBQXNCdEIsa0JBQWUsR0FBRyxFQUFFLENBQUMsdUJBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQSJ9