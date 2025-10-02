import React from "react";
import Title from "../shared/titel";
import CarouselCard from "../shared/seriesCards";
import SeriesCards from "../shared/seriesCards";

const NewChapter_FollowedComic = () => {
  return (
    <div>
      <Title
        title="New chapter from followed comic's"
        subtitle="Latest updates from your subscriptions"
      />
      <SeriesCards />
    </div>
  );
};

export default NewChapter_FollowedComic;
