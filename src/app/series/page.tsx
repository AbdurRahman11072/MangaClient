import AllSeriesCards from "@/components/AllSeries/allSeriesCards";
import { Series } from "@/components/types";
import React from "react";

const AllSeriesPage = () => {
  return (
    <div>
      <AllSeriesCards Series={Series} />
    </div>
  );
};

export default AllSeriesPage;
