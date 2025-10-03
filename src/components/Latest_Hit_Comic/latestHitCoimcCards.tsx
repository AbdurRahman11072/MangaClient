import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { NewChapterOfBookmark } from "../types";

interface seriesCardProps {
  Series: NewChapterOfBookmark[];
}

const LatestHitCoimcCards = ({ Series }: seriesCardProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        slidesToScroll: 2,
        loop: false,
      }}
      className="w-full "
    >
      <CarouselContent className="-ml-1 md:-ml-0">
        {Series.map((series, index) => (
          <CarouselItem
            key={series.id}
            className=" pl-2 h-full basis-[180px]  md:basis-[200px] lg:md:basis-[200px]"
          >
            <div className="bg-slate-800 rounded-lg transition-all duration-300 overflow-hidden group">
              <div className="relative h-52 sm:h-52  md:h-64 lg:h-64 overflow-hidden">
                <Image
                  src={series.coverImage}
                  alt={`${series.title} is loading`}
                  fill
                  className="object-cover md:group-hover:scale-110 transition-all duration-200"
                />
              </div>
              <div className="px-2 ">
                <p className="h-16 flex justify-center  font-semibold  items-center-safe ">
                  <span className=" mr-2 md:mr-3 text-3xl font-bold md:text-3xl ">
                    {index + 1}
                  </span>
                  <span className="text-xs md:text-sm">
                    {series.title.length > 35
                      ? series.title.slice(0, 35) + "..."
                      : series.title}
                  </span>
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="left-0 bg-black hover:bg-white/70 text-white hover:text-black border-0 backdrop-blur-sm"
        variant="ghost"
        aria-label="Previous comics"
      />
      <CarouselNext
        className="right-0 bg-black hover:bg-white/70 text-white hover:text-black border-0 backdrop-blur-sm"
        variant="ghost"
        aria-label="Next comics"
      />
    </Carousel>
  );
};

export default LatestHitCoimcCards;
