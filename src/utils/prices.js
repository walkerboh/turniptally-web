import find from "lodash/find";
import get from "lodash/get";

export const days = [1, 2, 3, 4, 5, 6];
export const periods = [0, 1];

export const getPrice = (data, day, period) =>
  get(find(data, { day, period }), "sellPrice", undefined);
