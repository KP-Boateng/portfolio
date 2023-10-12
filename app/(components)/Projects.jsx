"use client";

import vote from "../../public/vote-table.png";
import cat from "../../public/pet-breeds.png";
import gallery from "../../public/images-search.png";
import cosmic from "../../public/cosmic.png";
import dictionary from "../../public/dictionary.png";
import calc from "../../public/calc.png";
import loginPage from "../../public/mentor login.png";
import blog from "../../public/blog.png";
import spstest3 from "../../public/SPS TEST 3 FINAL UPDATE.jpg";
import allstar from "../../public/Shoes copy.jpg";
import postcard from "../../public/Postcard assessment with effects.jpg";
import { useState } from "react";
import Image from "next/image";
import { SpaceBold } from "../(fonts)/font";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Projects = ({ theme }) => {
  const [category, setCategory] = useState("all");
  const projects = [
    {
      id: 1,
      type: "web",
      image: blog,
      link: "https://kpboatengblog.vercel.app",
    },
    {
      id: 2,
      type: "web",
      image: cosmic,
      link: "https://cosmic-chronicles.vercel.app",
    },
    {
      id: 3,
      type: "web",
      image: calc,
      link: "https://pheonix-calc.vercel.app",
    },
    {
      id: 4,
      type: "web",
      image: dictionary,
      link: "https://pheonix-dictionary.vercel.app",
    },
    {
      id: 5,
      type: "web",
      image: vote,
      link: "#",
    },
    { id: 6, type: "ui", image: gallery, link: "#" },
    { id: 7, type: "web", image: loginPage, link: "#" },
    { id: 8, type: "app", image: cat, link: "#" },
    { id: 9, type: "photoshop", image: spstest3, link: "#" },
    { id: 10, type: "photoshop", image: allstar, link: "#" },
    { id: 11, type: "photoshop", image: postcard, link: "#" },
  ];
  var sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full py-4 px-2">
      <h1 className={` text-3xl ${SpaceBold.className}`}>PROJECTS</h1>
      <div className="bg-orange-400 h-1"></div>
      <div className=" grid grid-cols-2  gap-2 w-full mt-4 sm:grid-cols-1">
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
        </div>{" "}
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

      {/* render grid with different pics based on category */}
      {/* <Slider {...sliderSettings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>-+
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider> */}

      {category === "all" ? (
        <div className="grid grid-cols-1  gap-4 sm:grid-cols-2 mt-4">
          {projects.map((project) => (
            <div
              className={`flex flex-col items-center justify-center rounded-lg  ${
                theme === "light" ? " bg-neutral-200" : "bg-slate-400"
              }`}
              key={project.id}
            >
              <div className="flex-1">
                {<Image className="h-full w-full" src={project.image} />}
              </div>
              <div className="w-full flex justify-between items-center">
                <div>
                  <Link
                    href={project.link}
                    target="_blank"
                    className={` p-2 rounded-md text-center font-medium ${
                      theme === "light"
                        ? "bg-slate-300 text-black"
                        : "bg-slate-500 text-white"
                    }`}
                  >
                    Preview
                  </Link>
                </div>
                <div>
                  <button
                    className={` p-2 rounded-md text-center w-fit font-medium ${
                      theme === "light"
                        ? "bg-slate-300 text-black"
                        : "bg-slate-500 text-white"
                    }`}
                  >
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1  gap-4 sm:grid-cols-2 mt-4">
          {projects.map(
            (project) =>
              project.type === category && (
                <div
                  className={`flex flex-col items-center justify-center rounded-lg  ${
                    theme === "light" ? " bg-neutral-200" : "bg-slate-400"
                  }`}
                  key={project.id}
                >
                  <div className="flex-1">
                    {<Image className="h-full w-full" src={project.image} />}
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <div>
                      <Link
                        href={project.link}
                        target="_blank"
                        className={` p-2 rounded-md text-center font-medium ${
                          theme === "light"
                            ? "bg-slate-300 text-black"
                            : "bg-slate-500 text-white"
                        }`}
                      >
                        Preview
                      </Link>
                    </div>
                    <div>
                      <button
                        className={` p-2 rounded-md text-center w-fit font-medium ${
                          theme === "light"
                            ? "bg-slate-300 text-black"
                            : "bg-slate-500 text-white"
                        }`}
                      >
                        Source Code
                      </button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      )}

      {/* <Slider {...sliderSettings}>
        {category === "all"
          ? projects.map((project) => (
              <div key={project.id}>
                <div
                  className={`flex flex-col items-center justify-center rounded-lg  ${
                    theme === "light" ? " bg-neutral-200" : "bg-slate-400"
                  }`}
                >
                  <div>
                    <Image src={project.image} />
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <div>
                      <Link
                        href={project.link}
                        target="_blank"
                        className={` p-2 rounded-md text-center font-medium ${
                          theme === "light"
                            ? "bg-slate-300 text-black"
                            : "bg-slate-500 text-white"
                        }`}
                      >
                        Preview
                      </Link>
                    </div>
                    <div>
                      <button
                        className={` p-2 rounded-md text-center w-fit font-medium ${
                          theme === "light"
                            ? "bg-slate-300 text-black"
                            : "bg-slate-500 text-white"
                        }`}
                      >
                        Source Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
      </Slider> */}
    </div>
  );
};

export default Projects;
