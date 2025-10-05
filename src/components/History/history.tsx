import React from "react";
import Title from "../shared/titel";
import HistoryCards from "./historyCards";
import { Series } from "../types";

const History = () => {
  return (
    <div>
      <Title title="Recently Visited " subtitle="" />
      <HistoryCards Series={Series} />
    </div>
  );
};

export default History;
