"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
/**
 * Test Service
 */
class Test extends egg_1.Service {
    /**
     * sayHi to you
     * @param name - your name
     */
    async sayHi(name) {
        return `hi, ${name}`;
    }
}
exports.default = Test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBOEI7QUFFOUI7O0dBRUc7QUFDSCxNQUFxQixJQUFLLFNBQVEsYUFBTztJQUV2Qzs7O09BR0c7SUFDSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQVk7UUFDN0IsT0FBTyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRjtBQVRELHVCQVNDIn0=