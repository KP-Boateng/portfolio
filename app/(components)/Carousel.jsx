import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { SpaceBold } from "../(fonts)/font";
// import { useState } from "react";

export default function Carousel({ imageList, currentIndex, setCurrentIndex }) {
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=" relative flex flex-col  justify-center items-center">
      <Image
        src={imageList[currentIndex].image}
        alt={`Project ${currentIndex + 1}`}
        // className={imageList[currentIndex].style}
        className="object-contain w-full h-[350px] aspect-square"
      />
      <div className=" flex flex-row  gap-2 justify-center items-center">
        {imageList[currentIndex].link && (
          <Link
            href={imageList[currentIndex].link}
            target="_blank"
            className={`bg-slate-400 p-2 rounded-lg ${SpaceBold.className}`}
          >
            Demo
          </Link>
        )}
        {imageList[currentIndex].github && (
          <Link
            href={imageList[currentIndex].github}
            target="_blank"
            className={`bg-slate-400 p-2 rounded-lg ${SpaceBold.className}`}
          >
            Source Code
          </Link>
        )}
      </div>

      <button
        onClick={prevImage}
        className=" absolute top-1/2 left-0 transform -translate-y-1/2 z-10 animate-pulse "
      >
        <ArrowLeft sx={{ color: "red", fontSize: 60 }} />
      </button>
      <button
        onClick={nextImage}
        className=" absolute top-1/2 right-0 transform -translate-y-1/2 z-10 animate-pulse"
      >
        <ArrowRight sx={{ color: "red", fontSize: 60 }} />
      </button>
    </div>
  );
}
