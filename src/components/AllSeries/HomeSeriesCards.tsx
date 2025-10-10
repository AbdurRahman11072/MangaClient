import React from "react";
import { NewChapterOfBookmark } from "../types";
import Image from "next/image";
import { Star } from "lucide-react";
interface seriesCardProps {
  Series: NewChapterOfBookmark[];
}

const HomeSeriesCards = ({ Series }: seriesCardProps) => {
  return (
    <div className="flex flex-wrap gap-2  sm:justify-center md:justify-normal md:gap-3 lg:justify-center xl:justify-normal">
      {Series.map((series) => (
        <div
          key={series.id}
          className="w-[100%] sm:w-[70%] md:w-[49%] lg:w-[45%] xl:w-[32.50%] flex gap-2 bg-slate-600/30 rounded-lg p-2"
        >
          <div className="w-[50%] h-60 sm:h-64 md:h-60 lg:h-64 rounded-lg overflow-hidden ">
            <Image
              src={series.coverImage}
              alt={`${series.title} cover image`}
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="w-[50%] space-y-2">
            <h1 className="text-sm font-bold">
              {series.title.length > 45
                ? series.title.slice(0, 45) + "..."
                : series.title}
            </h1>
            <div className="flex justify-between sm:px-1">
              <h1 className="flex gap-1 items-center font-semibold">
                <Star size={14} color="orange" fill="orange" /> 5
              </h1>

              <h1 className="flex gap-1 items-center">
                <div
                  className={`w-[10px] h-[10px] rounded-full  ${
                    series.status === "Ongoing"
                      ? "bg-green-600"
                      : series.status === "Complete"
                      ? "bg-amber-600"
                      : "bg-red-600"
                  }`}
                ></div>
                <span className="font-semibold">{series.status}</span>
              </h1>
            </div>

            <button className="w-full p-2 bg-slate-700 md:hover:bg-slate-600  rounded-sm font-bold text-xs flex justify-between items-center">
              Continue: {series.continueChapter}
              <span className="font-normal">{series.timeAgo}</span>
            </button>
            <button className="w-full p-2 bg-slate-700 md:hover:bg-slate-600  rounded-sm font-bold text-xs flex justify-between items-center">
              Continue: {series.continueChapter}
              <span className="font-normal">{series.timeAgo}</span>
            </button>
            <button className="w-full p-2 bg-slate-700 md:hover:bg-slate-600  rounded-sm font-bold text-xs flex justify-between items-center">
              Continue: {series.continueChapter}
              <span className="font-normal">{series.timeAgo}</span>
            </button>
            <button className="w-full p-2 bg-slate-700 md:hover:bg-slate-600  rounded-sm font-bold text-xs flex justify-between items-center">
              Continue: {series.continueChapter}
              <span className="font-normal">{series.timeAgo}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeSeriesCards;
