"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateResource_1 = __importDefault(require("./middleware/validateResource"));
const user_controller_1 = require("./controllers/user.controller");
const user_schema_1 = require("./schema/user.schema");
function routes(app) {
    //app.get("/api/sessions",);
    app.post("/api/users", (0, validateResource_1.default)(user_schema_1.createUserSchema), user_controller_1.createUserHandler);
}
exports.default = routes;
