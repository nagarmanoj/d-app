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
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const default_1 = require("@apollo/server/plugin/landingPage/default");
function createApolloGraphqlServer() {
    return __awaiter(this, void 0, void 0, function* () {
        let plugins = [];
        if (process.env.NODE_ENV === "production") {
            plugins = [(0, default_1.ApolloServerPluginLandingPageProductionDefault)({ embed: true, graphRef: "myGraph@prod" })];
        }
        else {
            plugins = [(0, default_1.ApolloServerPluginLandingPageLocalDefault)({ embed: true })];
        }
        const gqlServer = new server_1.ApolloServer({
            typeDefs: `
           type Query {
                hello:String
           }
        `,
            resolvers: {
                Query: {
                    hello: () => `i am nagar`
                }
            },
            plugins,
        });
        //Start gql server
        yield gqlServer.start();
        return gqlServer;
    });
}
exports.default = createApolloGraphqlServer;
