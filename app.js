"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_typeorm_1 = require("./egg-typeorm");
exports.default = async (app) => {
    if (app.config.typeorm) {
        await egg_typeorm_1.default(app);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsK0NBQXNDO0FBRXRDLGtCQUFlLEtBQUssRUFBRSxHQUFnQixFQUFFLEVBQUU7SUFDdEMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUNwQixNQUFNLHFCQUFVLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDeEI7QUFDTCxDQUFDLENBQUEifQ==