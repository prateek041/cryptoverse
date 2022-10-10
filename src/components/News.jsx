import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment/moment";
import { useGetNewsQuery } from "../services/cryptoNewsApi";

const News = (simplified) => {
  const { data, isFetching } = useGetNewsQuery({
    newsCategory: "cryptocurrency",
    count: simplified ? 6 : 12,
  });

  if (isFetching) return "Loading...";

  return <div>Hello</div>;
};

export default News;
