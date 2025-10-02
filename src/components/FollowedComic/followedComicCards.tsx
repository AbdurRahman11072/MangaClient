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

const SeriesCards = ({ Series }: seriesCardProps) => {
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
        {Series.map((series) => (
          <CarouselItem
            key={series.id}
            className=" pl-2 h-full basis-[180px] md:basis-[200px] lg:md:basis-[200px]"
          >
            <div className="bg-slate-800 rounded-lg transition-all duration-300 overflow-hidden group">
              <div className="relative h-52 md:h-68 lg:h-64 overflow-hidden">
                <Image
                  src={series.coverImage}
                  alt={`${series.title} is loading`}
                  fill
                  className="object-cover md:group-hover:scale-110 transition-all duration-200"
                />
              </div>
              <div className="px-0.5 py-1 md:space-y-1">
                <div className="flex text-sm justify-between md:space-y-1 ">
                  <p className="font-semibold">Ch.{series.chapter}</p>
                  <p className="text-slate-300">{series.timeAgo}</p>
                </div>
                <p className="h-14 flex justify-center items-center font-semibold text-[16px] lg:text-[18px] text-center">
                  {series.title.length > 35
                    ? series.title.slice(0, 35) + "..."
                    : series.title}
                </p>
                <div className="flex justify-center">
                  <button className="w-[98%] p-0.5 md:p-1 bg-slate-700 hover:bg-slate-900  rounded-sm font-semibold ">
                    Continue: {series.continueChapter}
                  </button>
                </div>
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

export default SeriesCards;
