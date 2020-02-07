import React from "react";
import { Link } from "react-router-dom";
import { MDBListGroupItem } from "mdbreact";

import CoinDetail from "../CoinDetail";

const CoinItem = ({ data }) => (
  <MDBListGroupItem key={data.id}>
    <img className="w-20 mr-3" src={data.image.small} alt={data.name} />
    <Link to={`/coins/${data.id}`}>{data.name}</Link>
    <CoinDetail
      prefix={null}
      postfix={"$"}
      data={data.market_data.current_price.usd}
    />
    <CoinDetail
      prefix={"24h: "}
      postfix={"%"}
      data={data.market_data.price_change_percentage_24h}
    />
    <CoinDetail
      prefix={"7d: "}
      postfix={"%"}
      data={data.market_data.price_change_percentage_7d}
    />
    <CoinDetail
      prefix={"30d: "}
      postfix={"%"}
      data={data.market_data.price_change_percentage_30d}
    />
  </MDBListGroupItem>
);

export default CoinItem;
