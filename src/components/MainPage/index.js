import React, { useState, useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { useSelector, useDispatch } from "react-redux";
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

const MainPage = ({ match }) => {
  const num = +match.params.num;

  const dispatch = useDispatch();
  const { listOfCoinsTitle, coinsList, order } = useSelector(
    ({ coins }) => coins
  );

  const setCoinsListAction = page => dispatch(setCoinsList(page));

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setCoinsListAction(num).then(() => setIsLoading(false));
    const interval = setInterval(setCoinsListAction, SECONDS_30, num);
    return () => clearInterval(interval);
  }, [num, order, dispatch]);

  const paginationLength = getPaginationLength(listOfCoinsTitle.length);

  if (!num || (listOfCoinsTitle.length && num > paginationLength)) {
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
          <Pagination num={num} paginationLength={paginationLength} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

MainPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ num: PropTypes.string.isRequired })
  }).isRequired
};

export default withRouter(MainPage);
