import { township } from "../Data/township.js";
import { capitalizeFirstLetters } from "../utils/capitalizeFirstLetters.js";

export const getTownShip = async (req, res) => {
  const { region } = req.query;
  if (!region) {
    res.status(200).json({ data: township?.data });
  }

  const filterRegion = capitalizeFirstLetters(region);
  const townshipData = township.filter((data) => data?.region == filterRegion);

  res.status(200).json({ data: townshipData });
};
