import React from "react";

const CoinDetail = ({ prefix, postfix, data }) =>
  data ? (
    <span className="align-right">
      <small className="text-danger">{prefix}</small>
      {data.toFixed(2)}
      {postfix}
    </span>
  ) : null;

export default CoinDetail;
