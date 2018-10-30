"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const App_vue_1 = require("./App.vue");
const router_1 = require("./router");
vue_1.default.config.productionTip = false;
new vue_1.default({
    router: router_1.default,
    render: (h) => h(App_vue_1.default),
}).$mount('#app');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBcUI7QUFDckIsdUNBQTJCO0FBQzNCLHFDQUE2QjtBQUU3QixhQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUE7QUFFaEMsSUFBSSxhQUFHLENBQUM7SUFDSixNQUFNLEVBQU4sZ0JBQU07SUFDTixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBRyxDQUFDO0NBQ3hCLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUEifQ==