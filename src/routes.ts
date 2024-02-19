import { Express, Request, Response } from "express";
import { send } from "process";
import validateResource from "./middleware/validateResource";
import { createUserHandler } from "./controllers/user.controller";
import { createUserSchema } from "./schema/user.schema";


function routes(app: Express) {
    //app.get("/api/sessions",);
    app.post("/api/users", validateResource(createUserSchema), createUserHandler);
}

export default routes;