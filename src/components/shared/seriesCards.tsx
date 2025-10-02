import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";
interface NewChapterOfBookmark {
  id: string;
  title: string;
  chapter: number;
  timeAgo: string;
  source: string;
  coverImage: string;
  continueChapter: number;
  status: "Ongoing" | "Stoped" | "Complete";
}
const Series: NewChapterOfBookmark[] = [
  {
    id: "1",
    title: "Hiding a Logistics Center in The Apocalypse",
    chapter: 60,
    timeAgo: "19 hours ago",
    source: "ArcaneScans",
    coverImage:
      "https://madarascans.com/wp-content/uploads/2025/07/2025-07-02-07-34-46-1751484886338.webp",
    continueChapter: 2333,
    status: "Ongoing",
  },
  {
    id: "2",
    title: "Office Worker in the Ice Age",
    chapter: 13,
    timeAgo: "14 hours ago",
    source: "Thunderscans",
    coverImage:
      "https://madarascans.com/wp-content/uploads/2025/05/2025-05-11-11-52-56-1746964376547.jpg",
    continueChapter: 16,
    status: "Ongoing",
  },
  {
    id: "3",
    title: "Black Haze (2025)",
    chapter: 41,
    timeAgo: "22 hours ago",
    source: "ArcaneScans",
    coverImage:
      "https://madarascans.com/wp-content/uploads/2025/05/2025-05-11-11-52-56-1746964376547.jpg",
    continueChapter: 31,
    status: "Ongoing",
  },
  {
    id: "4",
    title: "The Genius Who Sees Through Everything",
    chapter: 24,
    timeAgo: "1 day ago",
    source: "REST SCANS",
    coverImage:
      "https://madarascans.com/wp-content/uploads/2025/09/2025-09-06-03-00-24-1757170824260.jpeg",
    continueChapter: 32,
    status: "Ongoing",
  },
  {
    id: "5",
    title: "The Awakening of Light Magic",
    chapter: 62,
    timeAgo: "2 days ago",
    source: "REST SCANS",
    coverImage:
      "https://madarascans.com/wp-content/uploads/2025/07/2025-07-04-10-29-52-1751624992766.png",
    continueChapter: 27,
    status: "Ongoing",
  },
  {
    id: "6",
    title: "The Investor Who Sees the Future",
    chapter: 60,
    timeAgo: "3 days ago",
    source: "Thunderscans",
    coverImage:
      "https://madarascans.com/wp-content/uploads/2025/07/2025-08-24-03-34-03-1756049643948.jpeg",
    continueChapter: 60,
    status: "Ongoing",
  },
  {
    id: "7",
    title: "Divine Throne",
    chapter: 45,
    timeAgo: "1 day ago",
    source: "MangaScans",
    coverImage:
      "https://madarascans.com/wp-content/uploads/2025/07/2025-07-02-07-34-46-1751484886338.webp",
    continueChapter: 45,
    status: "Ongoing",
  },
];

const SeriesCards = () => {
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
            className=" pl-2 h-full basis-[150px] sm:basis-[170px] md:basis-[180px] lg:md:basis-[200px]"
          >
            <div className="bg-slate-800 rounded-lg transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 sm:h-52  md:h-68 lg:h-64 overflow-hidden">
                <Image
                  src={series.coverImage}
                  alt={`${series.title} is loading`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-0.5 py-1">
                <div className="flex text-sm justify-between ">
                  <p className="font-semibold">Ch.{series.chapter}</p>
                  <p className="text-slate-300">{series.timeAgo}</p>
                </div>
                <p className="h-14 flex justify-center items-center font-semibold text-[16px] lg:text-[18px]">
                  {series.title.length > 35
                    ? series.title.slice(0, 35) + "..."
                    : series.title}
                </p>
                {series.continueChapter && (
                  <div className="flex justify-center">
                    <button className="w-[98%] bg-slate-700 hover:bg-slate-900  rounded-sm ">
                      Continue: {series.continueChapter}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default SeriesCards;
