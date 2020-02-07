import React, { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import MainPage from "../MainPage";
import CoinPage from "../CoinPage";
import { connect } from "react-redux";

import { setListOfCoinsTitle } from "../../store/coins/actions";

const App = ({ setListOfCoinsTitle }) => {
  useEffect(() => {
    setListOfCoinsTitle();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/1" />} />
        <Route path="/coins/:coinId" component={CoinPage} />
        <Route path="/:num" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { setListOfCoinsTitle })(App);
