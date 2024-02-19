import express, { Request, Response } from 'express'
import createApolloGraphqlServer from "./graphql";
import { expressMiddleware } from '@apollo/server/express4';
import dotenv from "dotenv";
import dbConnect from "../config/db";
import routes from "./routes";
dotenv.config();

async function main(){

  const app = express();
  const PORT = process.env.PORT || 4001;

  app.use(express.json());

  app.get("/", (_req: Request, res: Response) => {
    return res.send('Express Typescript and graphql on Vercel')
  })

  //app.use("/graphql",expressMiddleware(await createApolloGraphqlServer()));

  app.listen(PORT,async()=>{
    console.log(`Server started at http://localhost:${PORT}`);
    await dbConnect();
    routes(app);
  });

}
main().catch((err)=>console.log(err));