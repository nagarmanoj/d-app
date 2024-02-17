import express, { Request, Response } from 'express'


async function main(){

  const app = express()
  const port = process.env.PORT || 4001

  app.get('/', (_req: Request, res: Response) => {
    return res.send('Express Typescript and graphql on Vercel')
  })

  app.get('/ping', (_req: Request, res: Response) => {
    return res.send('pong 🏓')
  })

  app.listen(port, () => {
    return console.log(`Server is listening on http://localhost:${port}`)
})

}
main().catch((err)=>console.log(err));