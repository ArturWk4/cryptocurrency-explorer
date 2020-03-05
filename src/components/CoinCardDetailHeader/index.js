import React from "react";
import {
  CryptoDetails,
  CryptoDetailsHeader
} from "../coin-card-detail.module.css";

const CoinCardDetailHeader = () => (
  <div className="text-center">
    <span className={CryptoDetailsHeader}>Currency</span>
    <span className={CryptoDetails}>
      <i className="fas fa-dollar-sign" />
    </span>
    <span className={CryptoDetails}>
      <i className="fas fa-euro-sign" />
    </span>
    <span className={CryptoDetails}>
      <i className="fas fa-pound-sign" />
    </span>
  </div>
);

export default CoinCardDetailHeader;
