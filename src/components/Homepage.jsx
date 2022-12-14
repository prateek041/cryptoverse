import React from "react";
import { Typography, Row, Col, Statistic } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from "../components";
const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10); // custom hook created by redux
  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading...";

  return (
    <>
      <Title level={5}>Global Crypto Stats</Title>
      <Row>
        <Col span={12}>
          {" "}
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={3} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="home-title">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={3} className="home-title">
          Latest Crypto news
        </Title>
        <Title level={3} className="home-title">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
