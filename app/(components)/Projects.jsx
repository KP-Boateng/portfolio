"use client";

import { useEffect, useState } from "react";
import { SpaceBold } from "../(fonts)/font";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Carousel";
import { ProjectData } from "./ProjectData";
// import ProjectSlide from "./ProjectSlide";
const Projects = ({ theme }) => {
  const [category, setCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedProjects, setDisplayedProjects] = useState(ProjectData);
  useEffect(() => {
    setCurrentIndex(0);
    let list = [];
    category !== "all"
      ? ProjectData.map((project) => {
          if (project.type === category) {
            list.push(project);
            setDisplayedProjects(list);
          }
        })
      : setDisplayedProjects(ProjectData);
  }, [category]);

  return (
    <div className="h-max py-4 px-2">
      <h1 className={` text-3xl ${SpaceBold.className}`}>PROJECTS</h1>
      <div className="bg-orange-400 h-1"></div>
      <div className=" grid grid-cols-1 gap-2 w-full mt-4 sm:grid-cols-2">
        <div
          onClick={() => {
            setCategory("all");
          }}
          className={`w-full cursor-pointer bg-gray-400 p-1 rounded-lg flex justify-center items-center ${
            category === "all" && "border-b-4 border-orange-400"
          }`}
        >
          <h1 className="font-medium text-center">All</h1>
        </div>
        <div
          onClick={() => {
            setCategory("app");
          }}
          className={`w-full cursor-pointer  bg-gray-400 p-1 rounded-lg flex justify-center items-center ${
            category === "app" && "border-b-4 border-orange-400"
          }`}
        >
          <h1 className="font-medium text-center">App Development</h1>
        </div>
        <div
          onClick={() => {
            setCategory("web");
          }}
          className={`w-full cursor-pointer bg-gray-400 p-1 rounded-lg flex justify-center items-center ${
            category === "web" && "border-b-4 border-orange-400"
          }`}
        >
          <h1 className="font-medium text-center">Web Development</h1>
        </div>
        <div
          onClick={() => {
            setCategory("ui");
          }}
          className={`w-full cursor-pointer  bg-gray-400 p-1 rounded-lg flex justify-center items-center ${
            category === "ui" && "border-b-4 border-orange-400"
          }`}
        >
          <h1 className="font-medium text-center">UI/UX Design</h1>
        </div>
        <div
          onClick={() => {
            setCategory("photoshop");
          }}
          className={`w-full cursor-pointer  bg-gray-400 p-1 rounded-lg flex justify-center items-center ${
            category === "photoshop" && "border-b-4 border-orange-400"
          }`}
        >
          <h1 className="font-medium text-center">Graphic Design(PhotoShop)</h1>
        </div>
      </div>

      <div className=" mt-8">
        <Carousel
          imageList={displayedProjects}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </div>
  );
};

export default Projects;
