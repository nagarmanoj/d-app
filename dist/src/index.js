"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("../config/db"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const PORT = process.env.PORT || 4001;
        app.use(express_1.default.json());
        app.get("/", (_req, res) => {
            return res.send('Express Typescript and graphql on Vercel');
        });
        //app.use("/graphql",expressMiddleware(await createApolloGraphqlServer()));
        app.listen(PORT, () => __awaiter(this, void 0, void 0, function* () {
            console.log(`Server started at http://localhost:${PORT}`);
            yield (0, db_1.default)();
            (0, routes_1.default)(app);
        }));
    });
}
main().catch((err) => console.log(err));
