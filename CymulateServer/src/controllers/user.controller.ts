import * as express from "express";
import { IUser } from "../modules/IUser";
import * as userService from "../services/user.service"

export function createUserRequest(req: express.Request, res: express.Response, next: express.NextFunction){
    try {

        const user: IUser = {email: req.params.email, password: req.params.password};

      const msg =  userService.createUser(user);
        console.log('msg');
        res.send(200);
    } catch (error) {
        next(error);
        res.send(500);
    }
}