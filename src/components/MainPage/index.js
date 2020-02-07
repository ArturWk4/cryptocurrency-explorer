import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

import Pagination from "../Pagination";
import CoinsList from "../CoinsList";
import { getPaginationLength } from "../../utils/pagination";
import OrderSelect from "../OrderSelect";

const MainPage = props => {
  const { listOfCoinsTitle, match } = props;
  const num = +match.params.num;

  if (
    !num ||
    (listOfCoinsTitle.length &&
      num > getPaginationLength(listOfCoinsTitle.length))
  ) {
    return <Redirect to="/1" />;
  }

  return (
    <MDBContainer>
      <MDBRow className="test-main justify-content-center">
        <MDBCol xs="12" md="11" lg="10">
          <OrderSelect />
        </MDBCol>
        <MDBCol xs="12" md="11" lg="10">
          <CoinsList num={num} />
        </MDBCol>
        <MDBCol className="test-pagination" xs="12" md="11" lg="10">
          <Pagination
            num={num}
            paginationLength={getPaginationLength(listOfCoinsTitle.length)}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

const mapStateToProps = state => state.coins;

export default withRouter(connect(mapStateToProps, {})(MainPage));
