import { state } from "../Data/state.js";

export const getState = async (req, res) => {
  return res.status(200).json({ data: state });
};
