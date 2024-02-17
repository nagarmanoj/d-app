import { ApolloServer } from '@apollo/server';

async function createApolloGraphqlServer(){
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
    });
    //Start gql server
    await gqlServer.start();

    return gqlServer;

}
export default createApolloGraphqlServer;