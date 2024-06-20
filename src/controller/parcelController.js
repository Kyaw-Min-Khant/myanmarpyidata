import { parcelData } from "../Data/parcel.js";

export const getParcel = (req, res) => {
  return res.status(200).json({ data: parcelData });
};
