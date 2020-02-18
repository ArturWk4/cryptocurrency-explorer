import React from "react";
import { AlignRight, Small } from "./style.module.css";
const CoinDetail = ({ prefix, postfix, data }) =>
  data ? (
    <span className={AlignRight}>
      <small className={`text-danger ${Small}`}>{prefix}</small>
      {data.toFixed(2)}
      {postfix}
    </span>
  ) : null;

export default CoinDetail;
