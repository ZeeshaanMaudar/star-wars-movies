import { Movie, Order } from "../types";

export const sortArrayByDirectionAndProperty = (arr: Movie[], orderDirection: string, orderBy: keyof Movie) => {
  switch (orderDirection) {
    case Order.ASC:
    default:
      return arr.sort((a, b) =>
        a[orderBy] > b[orderBy] ? 1 : b[orderBy] > a[orderBy] ? -1 : 0
      );
    case Order.DESC:
      return arr.sort((a, b) =>
        a[orderBy] < b[orderBy] ? 1 : b[orderBy] < a[orderBy] ? -1 : 0
      );
  }
};
