"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let Session = class Session {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Session.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        unique: true
    }),
    tslib_1.__metadata("design:type", String)
], Session.prototype, "token", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => User_1.User, user => user.session),
    tslib_1.__metadata("design:type", User_1.User)
], Session.prototype, "user", void 0);
Session = tslib_1.__decorate([
    typeorm_1.Entity()
], Session);
exports.Session = Session;
exports.default = () => typeorm_1.getRepository(Session);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNlc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdGO0FBQ3hGLGlDQUE2QjtBQUc3QixJQUFhLE9BQU8sR0FBcEIsTUFBYSxPQUFPO0NBWW5CLENBQUE7QUFURztJQURDLGdDQUFzQixFQUFFOzttQ0FDZjtBQUtWO0lBSEMsZ0JBQU0sQ0FBQztRQUNKLE1BQU0sRUFBRSxJQUFJO0tBQ2YsQ0FBQzs7c0NBQ1c7QUFHYjtJQURDLG1CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztzQ0FDdEMsV0FBSTtxQ0FBQTtBQVhELE9BQU87SUFEbkIsZ0JBQU0sRUFBRTtHQUNJLE9BQU8sQ0FZbkI7QUFaWSwwQkFBTztBQWNwQixrQkFBZSxHQUFHLEVBQUUsQ0FBQyx1QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBIn0=