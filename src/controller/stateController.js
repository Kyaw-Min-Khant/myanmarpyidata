import { state } from "../Data/state.js";

export const getState = (req, res) => {
  return res.status(200).json({ data: state });
};
