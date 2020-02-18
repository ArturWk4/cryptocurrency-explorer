import React, { useEffect, useState } from "react";
import { Redirect, withRouter } from "react-router";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow
} from "mdbreact";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import PropTypes from "prop-types";
import Spinner from "../Spinner";
import { fetchCoinDetails, getMarketChart } from "../../services/coinService";
import dangerouslyCreateInnerHTML from "../../utils/dangerouslyCreateInnerHTML";
import CoinCardDetailHeader from "../CoinCardDetailHeader";
import CoinCardDetail from "../CoinCardDetail";
import { SECONDS_30 } from "../../utils/constants";
import { Page } from "../page.module.css";
import { Chart } from "./style.module.css";

const CoinPage = ({ match }) => {
  const { coinId } = match.params;
  const [coinDetails, setCoinDetails] = useState({});
  const [marketChart, setMarketChart] = useState([]);

  useEffect(() => {
    const fetchFunction = async () => {
      const res = await fetchCoinDetails(coinId);
      setCoinDetails(res.data);
      const coinMarketData = await getMarketChart(coinId);
      setMarketChart(coinMarketData.data.prices);
    };
    fetchFunction();
    const interval = setInterval(fetchFunction, SECONDS_30);
    return () => {
      clearInterval(interval);
      setCoinDetails({});
      setMarketChart([]);
    };
  }, [coinId]);

  if (coinDetails.error) {
    return <Redirect to="/" />;
  }
  return Object.keys(coinDetails).length ? (
    <MDBContainer>
      <MDBRow className={Page}>
        <MDBCol xs="12" md="11" lg="10">
          <MDBCard>
            <MDBCardImage
              className="img-fluid mx-auto"
              src={coinDetails.image.large}
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>{coinDetails.name}</MDBCardTitle>
              <MDBCardText
                dangerouslySetInnerHTML={dangerouslyCreateInnerHTML(
                  coinDetails.description.en
                )}
              />
              <CoinCardDetailHeader />
              <CoinCardDetail
                header="Current price"
                data={coinDetails.market_data.current_price}
                symbols={["$", "€", "£"]}
              />
              <CoinCardDetail
                header="Price change 24h"
                data={
                  coinDetails.market_data
                    .price_change_percentage_24h_in_currency
                }
                symbols={["%", "%", "%"]}
              />
              <CoinCardDetail
                header="Price change 7d"
                data={
                  coinDetails.market_data.price_change_percentage_7d_in_currency
                }
                symbols={["%", "%", "%"]}
              />
              <CoinCardDetail
                header="Price change 30d"
                data={
                  coinDetails.market_data
                    .price_change_percentage_30d_in_currency
                }
                symbols={["%", "%", "%"]}
              />
              <LineChart
                width={700}
                height={300}
                className={Chart}
                data={marketChart.map(item => ({
                  price: +item[1].toFixed(4)
                }))}
              >
                <CartesianGrid />
                <XAxis hide />
                <YAxis
                  type="number"
                  domain={["dataMin", "dataMax"]}
                  minTickGap="5"
                  width={100}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#8884d8"
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  ) : (
    <Spinner />
  );
};

CoinPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      coinId: PropTypes.string.isRequired
    })
  }).isRequired
};

export default withRouter(CoinPage);
