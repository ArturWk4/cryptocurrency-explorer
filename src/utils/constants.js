import CoinGecko from "coingecko-api";

const PAGINATION_LENGTH = 8;
const COINS_PER_PAGE = 15;
const SECONDS_30 = 30000;
const GECKO_ORDER = [
  { value: CoinGecko.ORDER.GECKO_DESC, label: "Results by scoring system ↓" },
  { value: CoinGecko.ORDER.GECKO_ASC, label: "Results by scoring system ↑" },
  { value: CoinGecko.ORDER.MARKET_CAP_DESC, label: "Market cap ↓" },
  { value: CoinGecko.ORDER.MARKET_CAP_ASC, label: "Market cap ↑" },
  { value: CoinGecko.ORDER.COIN_NAME_DESC, label: "Coin name ↓" },
  { value: CoinGecko.ORDER.COIN_NAME_ASC, label: "Coin name ↑" },
  { value: CoinGecko.ORDER.PRICE_DESC, label: "Price ↓" },
  { value: CoinGecko.ORDER.PRICE_ASC, label: "Price ↑" },
  { value: CoinGecko.ORDER.HOUR_24_DESC, label: "Results by 24 hour change ↓" },
  { value: CoinGecko.ORDER.HOUR_24_ASC, label: "Results by 24 hour change ↑" }
];

export { PAGINATION_LENGTH, COINS_PER_PAGE, GECKO_ORDER, SECONDS_30 };
