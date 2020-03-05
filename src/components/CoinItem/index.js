import React from "react";
import { Link } from "react-router-dom";
import { MDBListGroupItem } from "mdbreact";
import PropTypes from "prop-types";
import CoinDetail from "../CoinDetail";

const CoinItem = ({ data }) => (
  <MDBListGroupItem key={data.id}>
    <img className="w-20 mr-3" src={data.image.small} alt={data.name} />
    <Link to={`/coins/${data.id}`}>{data.name}</Link>
    <CoinDetail
      prefix={null}
      postfix="$"
      data={data.market_data.current_price.usd}
    />
    <CoinDetail
      prefix="24h: "
      postfix="%"
      data={data.market_data.price_change_percentage_24h}
    />
    <CoinDetail
      prefix="7d: "
      postfix="%"
      data={data.market_data.price_change_percentage_7d}
    />
    <CoinDetail
      prefix="30d: "
      postfix="%"
      data={data.market_data.price_change_percentage_30d}
    />
  </MDBListGroupItem>
);

CoinItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({
      small: PropTypes.string.isRequired
    }).isRequired,
    market_data: PropTypes.shape({
      current_price: PropTypes.shape(),
      price_change_percentage_24h: PropTypes.number,
      price_change_percentage_7d: PropTypes.number,
      price_change_percentage_30d: PropTypes.number
    })
  }).isRequired
};

export default CoinItem;
