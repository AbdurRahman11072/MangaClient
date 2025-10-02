import React from "react";
import Title from "../shared/titel";
import { Popular } from "../types";
import LatestHitCoimcCards from "./latestHitCoimcCards";

const LatestHitCoimc = () => {
  return (
    <div>
      <Title
        title="The Latest Hit Comics"
        subtitle="Dive into the 50 Comics Captivating Viewers Worldwide."
      />
      <LatestHitCoimcCards Series={Popular} />
    </div>
  );
};

export default LatestHitCoimc;
