import React from "react";
import PropTypes from "prop-types";
import {
  CryptoDetails,
  CryptoDetailsHeader
} from "../coin-card-detail.module.css";

const CoinCardDetail = ({ header, data, symbols }) => (
  <div className="text-center">
    {data && (
      <>
        <span className={CryptoDetailsHeader}>{header}</span>
        <span className={CryptoDetails}>
          {data.usd && ` ${data.usd} ${symbols[0]}`}
        </span>
        <span className={CryptoDetails}>
          {data.eur && ` ${data.eur} ${symbols[1]}`}
        </span>
        <span className={CryptoDetails}>
          {data.gbp && ` ${data.gbp} ${symbols[2]}`}
        </span>
      </>
    )}
  </div>
);

CoinCardDetail.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.shape({
    usd: PropTypes.number,
    eur: PropTypes.number,
    gbp: PropTypes.number
  }).isRequired,
  symbols: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CoinCardDetail;
