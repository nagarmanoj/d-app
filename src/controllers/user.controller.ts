import { Request, Response } from "express";
import { createUser } from "../services/user.service";
import { CreateUserInput } from "../schema/user.schema";



export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    return res.send(user);
  } catch (e: any) {
    console.error(e);
    return res.status(409).send(e.message);
  }
}