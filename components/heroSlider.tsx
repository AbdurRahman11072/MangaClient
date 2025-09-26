"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const slideImg = [
  {
    img: "https://en-thunderscans.com/wp-content/uploads/2024/08/2024-09-15-07-20-36-1726384836037.png",
  },
  {
    img: "https://en-thunderscans.com/wp-content/uploads/2024/11/2025-02-13-02-37-08-1739457428353.png",
  },
  {
    img: "https://en-thunderscans.com/wp-content/uploads/2024/09/2024-09-12-06-57-05-1726167425183.png",
  },
  {
    img: "https://en-thunderscans.com/wp-content/uploads/2024/09/2024-09-17-07-42-47-1726558967611.png",
  },
];

const HeroSlider = () => {
  return (
    <div className="mx-auto max-w-7xl justify-items-center">
      <Carousel
        opts={{
          align: "center",
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          {slideImg.map((item) => (
            <CarouselItem
              key={item.img}
              className="flex justify-center items-center"
            >
              <Image
                src={item.img}
                alt="Slider img"
                width={1080}
                height={300}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeroSlider;
