import { getParcel } from "../controller/parcelController.js";
import { getState } from "../controller/stateController.js";
import { getTownShip } from "../controller/townshipController.js";
import asyncHandler from "../middleware/asyncHandler.js";

export default (router) => {
  router.get("/", async (req, res) => {
    return res.status(200).send("Hello World!");
  });
  router.get("/getState", asyncHandler(getState));

  router.get("/getTownShip", asyncHandler(getTownShip));
  router.get("/getParcel", asyncHandler(getParcel));
};
