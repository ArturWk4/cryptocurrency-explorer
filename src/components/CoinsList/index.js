import React from "react";
import { MDBListGroup } from "mdbreact";
import PropTypes from "prop-types";
import CoinItem from "../CoinItem";
import Spinner from "../Spinner";

const CoinsList = ({ coinsList }) => (coinsList && coinsList.length > 0 ? (
  <MDBListGroup className="w-100">
    {coinsList.map(coin => (
      <CoinItem key={coin.id} data={coin} />
    ))}
  </MDBListGroup>
) : (
  <Spinner />
));

CoinsList.propTypes = {
  coinsList: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ).isRequired
};

export default CoinsList;
