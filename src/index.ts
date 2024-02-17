import express, { Request, Response } from 'express'
import createApolloGraphqlServer from "./graphql";
import { expressMiddleware } from '@apollo/server/express4';

async function main(){

  const app = express();
  const PORT = process.env.PORT || 4001;

  app.use(express.json());

  app.get("/", (_req: Request, res: Response) => {
    return res.send('Express Typescript and graphql on Vercel')
  })

  app.use("/graphql",expressMiddleware(await createApolloGraphqlServer()));

  app.listen(PORT,()=>console.log(`Server started at port:${PORT}`));

}
main().catch((err)=>console.log(err));