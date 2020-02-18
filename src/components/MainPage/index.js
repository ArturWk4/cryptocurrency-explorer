import React, { useState, useEffect, useMemo } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Pagination from "../Pagination";
import CoinsList from "../CoinsList";
import { getPaginationLength } from "../../utils/pagination";
import OrderSelect from "../OrderSelect";
import { SECONDS_30 } from "../../utils/constants";
import { setCoinsList } from "../../store/coins/actions";
import Spinner from "../Spinner";
import { Page } from "../page.module.css";

const MainPage = props => {
  const {
    listOfCoinsTitle,
    match,
    setCoinsListAction,
    order,
    coinsList
  } = props;
  const num = +match.params.num;

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setCoinsListAction(num).then(() => setIsLoading(false));
    const interval = setInterval(setCoinsListAction, SECONDS_30, num);
    return () => clearInterval(interval);
  }, [setCoinsListAction, num, order]);

  const paginationLength = getPaginationLength(listOfCoinsTitle.length);
  const memoizedPagination = useMemo(
    () => <Pagination num={num} paginationLength={paginationLength} />,
    [num, paginationLength]
  );

  if (
    !num ||
    (listOfCoinsTitle.length &&
      num > getPaginationLength(listOfCoinsTitle.length))
  ) {
    return <Redirect to="/1" />;
  }

  return (
    <MDBContainer>
      <MDBRow className={Page}>
        <MDBCol xs="12" md="11" lg="10">
          <OrderSelect />
        </MDBCol>
        <MDBCol xs="12" md="11" lg="10">
          {!isLoading ? <CoinsList coinsList={coinsList} /> : <Spinner />}
        </MDBCol>
        <MDBCol className={Page} xs="12" md="11" lg="10">
          {memoizedPagination}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

MainPage.propTypes = {
  listOfCoinsTitle: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      symbol: PropTypes.string,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({ num: PropTypes.string.isRequired })
  }).isRequired,
  setCoinsListAction: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  coinsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired
};

const mapStateToProps = state => state.coins;

export default withRouter(
  connect(mapStateToProps, { setCoinsListAction: setCoinsList })(MainPage)
);
