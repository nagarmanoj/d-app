import { ApolloServer } from '@apollo/server';
import {
    ApolloServerPluginLandingPageLocalDefault,
    ApolloServerPluginLandingPageProductionDefault,
  } from "@apollo/server/plugin/landingPage/default";
async function createApolloGraphqlServer(){
    let plugins = [];
    if (process.env.NODE_ENV === "production") {
    plugins = [ApolloServerPluginLandingPageProductionDefault({ embed: true, graphRef: "myGraph@prod" })];
    } else {
    plugins = [ApolloServerPluginLandingPageLocalDefault({ embed: true })];
    }
    const gqlServer = new ApolloServer({
        typeDefs: `
           type Query {
                hello:String
           }
        `,
        resolvers:{
           Query:{
            hello:()=>`i am nagar`
           }
        },
        plugins,
    });
    //Start gql server
    await gqlServer.start();

    return gqlServer;

}
export default createApolloGraphqlServer;