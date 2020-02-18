import React from "react";
import PropTypes from "prop-types";
import { AlignRight, Small } from "./style.module.css";
const CoinDetail = ({ prefix, postfix, data }) =>
  data ? (
    <span className={AlignRight}>
      <small className={`text-danger ${Small}`}>{prefix}</small>
      {data.toFixed(2)}
      {postfix}
    </span>
  ) : null;

CoinDetail.propTypes = {
  prefix: PropTypes.string,
  postfix: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired
};
export default CoinDetail;
