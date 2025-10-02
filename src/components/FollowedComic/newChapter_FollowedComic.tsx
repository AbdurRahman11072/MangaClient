import React from "react";
import Title from "../shared/titel";
import CarouselCard from "./followedComicCards";
import SeriesCards from "./followedComicCards";
import { Series } from "../types";

const NewChapter_FollowedComic = () => {
  return (
    <div className="">
      <Title
        title="New chapter from followed comic's"
        subtitle="The Story Continues... Read the New Chapter Now!"
      />
      <SeriesCards Series={Series} />
    </div>
  );
};

export default NewChapter_FollowedComic;
