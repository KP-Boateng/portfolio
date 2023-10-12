"use client";
import About from "./(components)/About";
import { useAppContext } from "./(components)/AppContext";
import Resume from "./(components)/Resume";
import Projects from "./(components)/Projects";
import Contact from "./(components)/Contact";

export default function Home() {
  const { page } = useAppContext();

  return (
    <>
      {page === "about" ? (
        <About />
      ) : page === "resume" ? (
        <Resume />
      ) : page === "work" ? (
        <Projects />
      ) : page === "contact" ? (
        <Contact />
      ) : null}
    </>
    // <main className="flex min-h-screen flex-col items-center justify-center border-t-4 border-orange-400">
    //   <h1>Hello there, this is just a test</h1>
    // </main>
  );
}
