"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
exports.default = {
    md5(text) {
        return crypto
            .createHash('md5')
            .update(text)
            .digest('hex');
    },
    sha1(text) {
        return crypto
            .createHash('sha1')
            .update(text)
            .digest('hex');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQWdDO0FBRWhDLGtCQUFlO0lBQ1gsR0FBRyxDQUFDLElBQVk7UUFDWixPQUFPLE1BQU07YUFDUixVQUFVLENBQUMsS0FBSyxDQUFDO2FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDWixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDdEIsQ0FBQztJQUVELElBQUksQ0FBQyxJQUFZO1FBQ2IsT0FBTyxNQUFNO2FBQ1IsVUFBVSxDQUFDLE1BQU0sQ0FBQzthQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3RCLENBQUM7Q0FDSixDQUFBIn0=