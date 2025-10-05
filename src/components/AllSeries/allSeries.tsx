import React from "react";
import Title from "../shared/titel";
import AllSeriesCards from "./allSeriesCards";
import { Series } from "../types";

const AllSeries = () => {
  return (
    <div>
      <Title title="All Series" subtitle="" />
      <AllSeriesCards Series={Series} />
    </div>
  );
};

export default AllSeries;
