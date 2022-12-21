import { Router } from "express";
import * as userController from "../controllers/user.controller";

export default function (): Router {
  const router = Router();
  router.get("/user/login");
  router.post("user/signup",userController.createUserRequest);
  return router;
}