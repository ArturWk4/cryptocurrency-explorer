import React, { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import MainPage from "../MainPage";
import CoinPage from "../CoinPage";
import { connect } from "react-redux";

import { setListOfCoinsTitle } from "../../store/coins/actions";

const App = ({ setListOfCoinsTitleAction }) => {
  useEffect(() => {
    setListOfCoinsTitleAction();
  }, [setListOfCoinsTitleAction]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/coins/:coinId" component={CoinPage} />
        <Route path="/:num" component={MainPage} />
        <Redirect to="/1" />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
  setListOfCoinsTitleAction: setListOfCoinsTitle
})(App);
