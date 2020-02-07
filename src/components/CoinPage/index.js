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
import Spinner from "../Spinner";
import { getCoinDetails, getMarketChart } from "../../services/coinService";
import dangerouslyCreateInnerHTML from "../../utils/dangerouslyCreateInnerHTML";
import CoinCardDetail from "../CoinCardDetail";
import "../../style.css";

const CoinPage = ({ match }) => {
  const { coinId } = match.params;
  const [coinDetails, setCoinDetails] = useState({});
  const [marketChart, setMarketChart] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getCoinDetails(coinId);
      setCoinDetails(res.data);
      const coinMarketData = await getMarketChart(coinId);
      setMarketChart(coinMarketData.data.prices);
    })();
    return () => setCoinDetails({});
  }, [coinId]);

  return !coinDetails.error ? (
    Object.keys(coinDetails).length ? (
      <MDBContainer>
        <MDBRow className="test-main justify-content-center">
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
                <CoinCardDetail
                  data={[
                    "Currency",
                    '<i class="fas fa-dollar-sign"/>',
                    '<i class="fas fa-euro-sign"/>',
                    '<i class="fas fa-pound-sign"/>'
                  ]}
                />
                <CoinCardDetail
                  data={[
                    `Current price`,
                    `${coinDetails.market_data.current_price.usd} $`,
                    `${coinDetails.market_data.current_price.eur} €`,
                    `${coinDetails.market_data.current_price.gbp} £`
                  ]}
                />
                <CoinCardDetail
                  data={[
                    `Price change 24h`,
                    `${coinDetails.market_data.price_change_percentage_24h_in_currency.usd} %`,
                    `${coinDetails.market_data.price_change_percentage_24h_in_currency.eur} %`,
                    `${coinDetails.market_data.price_change_percentage_24h_in_currency.gbp} %`
                  ]}
                />
                <CoinCardDetail
                  data={[
                    `Price change 7d`,
                    `${coinDetails.market_data.price_change_percentage_7d_in_currency.usd} %`,
                    `${coinDetails.market_data.price_change_percentage_7d_in_currency.eur} %`,
                    `${coinDetails.market_data.price_change_percentage_7d_in_currency.gbp} %`
                  ]}
                />
                <CoinCardDetail
                  data={[
                    `Price change 30d`,
                    `${coinDetails.market_data.price_change_percentage_30d_in_currency.usd} %`,
                    `${coinDetails.market_data.price_change_percentage_30d_in_currency.eur} %`,
                    `${coinDetails.market_data.price_change_percentage_30d_in_currency.gbp} %`
                  ]}
                />
                <LineChart
                  width={700}
                  height={300}
                  data={marketChart.map(item => ({
                    price: +item[1].toFixed(4)
                  }))}
                  className={"chart"}
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
    )
  ) : (
    <Redirect to="/" />
  );
};

export default withRouter(CoinPage);
