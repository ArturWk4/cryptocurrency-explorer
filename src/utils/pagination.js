import { PAGINATION_LENGTH, COINS_PER_PAGE } from "./constants";

const getPaginationNumbers = num =>
  new Array(PAGINATION_LENGTH)
    .fill(num, 0, PAGINATION_LENGTH)
    .map((e, i) => e + i - Math.floor(PAGINATION_LENGTH / 2));

const getPaginationLength = totalCoins =>
  Math.ceil(totalCoins / COINS_PER_PAGE);

export { getPaginationNumbers, getPaginationLength };
