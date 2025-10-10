import React from "react";
import Title from "../shared/titel";
import AllSeriesCards from "./allSeriesCards";
import { Series } from "../types";
import HomeSeriesCards from "./HomeSeriesCards";

const AllSeries = () => {
  return (
    <div>
      <Title title="All Series" subtitle="" />
      <HomeSeriesCards Series={Series} />
    </div>
  );
};

export default AllSeries;
