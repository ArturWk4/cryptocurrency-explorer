import CoinGecko from "coingecko-api";

import { COINS_PER_PAGE as per_page } from "../utils/constants";

const CoinGeckoClient = new CoinGecko();

const listCoins = async (page, order) =>
  CoinGeckoClient.coins.all({ per_page, page, order });

const getAllCoinsTitle = () => CoinGeckoClient.coins.list();

const fetchCoinDetails = name => CoinGeckoClient.coins.fetch(name);

const getMarketChart = id => CoinGeckoClient.coins.fetchMarketChart(id);

export { listCoins, getAllCoinsTitle, fetchCoinDetails, getMarketChart };
