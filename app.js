"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_typeorm_1 = require("./egg-typeorm");
require("reflect-metadata");
exports.default = async (app) => {
    if (app.config.typeorm) {
        await egg_typeorm_1.default(app);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsK0NBQXNDO0FBQ3RDLDRCQUF5QjtBQUV6QixrQkFBZSxLQUFLLEVBQUUsR0FBZ0IsRUFBRSxFQUFFO0lBQ3RDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDcEIsTUFBTSxxQkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0tBQ3hCO0FBQ0wsQ0FBQyxDQUFBIn0=