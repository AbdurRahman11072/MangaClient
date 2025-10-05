import React from "react";
import { NewChapterOfBookmark } from "../types";
import Image from "next/image";

interface seriesCardProps {
  Series: NewChapterOfBookmark[];
}

const AllSeriesCards = ({ Series }: seriesCardProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 p-2">
      {Series.map((series) => (
        <div key={series.id} className=" space-y-1.5">
          {/* cover image  */}
          <div className="w-full h-56 md:h-60 xl:h-64 overflow-hidden rounded-lg">
            <Image
              src={series.coverImage}
              alt={`${series.title} cover image`}
              width={500}
              height={500}
              className=" object-cover "
            />
          </div>
          {/* title of the series  */}
          <h1 className="h-12 sm:h-14 md:h-12 flex justify-center items-center">
            {series.title.length > 50
              ? series.title.slice(0, 50) + " ..."
              : series.title}
          </h1>
          {/* 2 new chapters list button  */}
          <div className="flex justify-center">
            <button className="w-[98%] p-1 bg-slate-700 md:hover:bg-slate-600  rounded-sm font-semibold text-sm ">
              Continue: {series.continueChapter}
            </button>
          </div>
          <div className="flex justify-center">
            <button className="w-[98%] p-1 bg-slate-700 md:hover:bg-slate-600  rounded-sm font-semibold text-sm ">
              Continue: {series.continueChapter}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllSeriesCards;
