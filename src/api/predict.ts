import axios from "axios";
import type { PredictionResponse } from "src/models/prediction";

export const predict = () => {
  return axios.get<PredictionResponse>("/predict");
};
