import React from "react";
import { MDBListGroup } from "mdbreact";
import CoinItem from "../CoinItem";
import Spinner from "../Spinner";

const CoinsList = ({ coinsList }) => {
  return coinsList && coinsList.length > 0 ? (
    <MDBListGroup className="w-100">
      {coinsList.map(coin => (
        <CoinItem key={coin.id} data={coin} />
      ))}
    </MDBListGroup>
  ) : (
    <Spinner />
  );
};

export default CoinsList;
