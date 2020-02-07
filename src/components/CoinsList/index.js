import React, { useEffect } from "react";
import { MDBListGroup } from "mdbreact";
import { connect } from "react-redux";

import CoinItem from "../CoinItem";
import { setCoinsList } from "../../store/coins/actions";
import Spinner from "../Spinner";

const CoinsList = ({ data, num, setCoinsList, order }) => {
  useEffect(() => {
    setCoinsList(num);
  }, [num, order]);

  return data && data.length > 0 ? (
    <MDBListGroup style={{ width: "100%" }}>
      {data.map(e => (
        <CoinItem key={e.id} data={e} />
      ))}
    </MDBListGroup>
  ) : (
    <Spinner />
  );
};

const mapStateToProps = ({ coins }) => ({
  data: coins.coinsList,
  order: coins.order
});

export default connect(mapStateToProps, { setCoinsList })(CoinsList);
