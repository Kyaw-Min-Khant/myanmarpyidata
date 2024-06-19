import { Router } from "express";
import stateRouter from "./stateRouter.js";
const router = Router();
export default () => {
  stateRouter(router);
  return router;
};
