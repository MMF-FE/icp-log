"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Session_1 = require("./Session");
let User = class User {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        unique: true
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => Session_1.Session, session => session.user),
    tslib_1.__metadata("design:type", Session_1.Session)
], User.prototype, "session", void 0);
User = tslib_1.__decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
exports.default = () => typeorm_1.getRepository(User);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdGO0FBQ3hGLHVDQUFtQztBQUduQyxJQUFhLElBQUksR0FBakIsTUFBYSxJQUFJO0NBZWhCLENBQUE7QUFaRztJQURDLGdDQUFzQixFQUFFOztnQ0FDZjtBQUtWO0lBSEMsZ0JBQU0sQ0FBQztRQUNKLE1BQU0sRUFBRSxJQUFJO0tBQ2YsQ0FBQzs7a0NBQ1U7QUFHWjtJQURDLGdCQUFNLEVBQUU7O3NDQUNPO0FBR2hCO0lBREMsbUJBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztzQ0FDekMsaUJBQU87cUNBQUE7QUFkUCxJQUFJO0lBRGhCLGdCQUFNLEVBQUU7R0FDSSxJQUFJLENBZWhCO0FBZlksb0JBQUk7QUFpQmpCLGtCQUFlLEdBQUcsRUFBRSxDQUFDLHVCQUFhLENBQUMsSUFBSSxDQUFDLENBQUEifQ==