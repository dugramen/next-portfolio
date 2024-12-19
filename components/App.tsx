import React, { useEffect, useState } from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import { twMerge } from "tailwind-merge";
// import { useWindowScroll } from "@uidotdev/usehooks";
import { useScrollBreakpoint } from "./Pages/components";
import { Three } from "./Pages/three";

export const ScrollBreakpoint = 100;

export default function App({ repos }) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  // const [topLerp, setTopLerp] = React.useState(0)
  // const [atTop, setAtTop] = React.useState(true);
  const pages = ["Skills", "Portfolio", "Contact"];

  const atTop = !useScrollBreakpoint(ScrollBreakpoint);

  console.log({ atTop });

  return (
    <div className={"App " + (atTop ? "scroll-top" : "scroll-not-top")}>
      {/* <div
        className={twMerge("fixed inset-0 pointer-events-none")}
        style={{
          background: `linear-gradient(
          hsla(0, 0%, 80%),
          transparent 128px,
          transparent calc(100% - 0px),
          hsla(0, 0%, 80%)
        )`,
          zIndex: 20,
        }}
      /> */}
      <div
        className="fixed inset-0 GradientFg pointer-events-none"
        style={{ zIndex: 20 }}
      />

      {/* <div className='stationary'/> */}

      <NavBar pages={pages} scrollContainer={containerRef.current} />

      <div
        className={twMerge(
          "fixed left-0 right-0 top-0 h-[100vh] -z-50 transition-all duration-700",
          atTop && "duration-300"
        )}
        style={{
          filter: atTop ? "" : "brightness(1)",
        }}
      >
        <div
          className={twMerge("absolute inset-0 transition-all duration-500")}
          style={{
            filter: atTop ? "" : "grayscale(1) brightness(6)",
          }}
        >
          <Three
          // atTop={atTop}
          />
        </div>
      </div>

      <div
        className="flex flex-col gap-4 p-0 "
        ref={containerRef}
        style={{
          overflowY: "visible",
        }}
        // onScroll={handleScroll}
        // onResize={handleScroll}
      >
        <About />
        <Skills />
        <Projects repos={repos} />
        <Contact />
      </div>
    </div>
  );
}

function NavBar({ pages, scrollContainer }) {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className={`Navbar px-10 relative`}
      style={{
        // transform: `translateY(${(1-topLerp) * window.innerHeight}px)`
        zIndex: 100,
      }}
    >
      <p className="text-2xl text-red-900 font-bold mr-auto">Koliur Rahman</p>
      <button className="nav-resume gradient-button">Resume</button>

      <div
        className={twMerge(
          `hidden items-center`,
          `backdrop-blur-sm bg-black/10
            shadow-sm`,
          open && `
            flex flex-col absolute top-full rounded-lg -translate-y-3
            transition-all duration-300
          `,
          "sm:relative sm:flex sm:flex-row sm:top-auto sm:transform-none sm:rounded-full sm:px-2"
        )}
      >
        {pages.map((item) => (
          <p
            className={twMerge(
              "Nav-item px-4 py-2 text-xs font-medium"
            )}
            key={item}
            onClick={() => {
              const element = document.getElementById(`${item}Page`);
              if (element) {
                scrollContainer?.scrollTo?.({
                  top: element.offsetTop - 100,
                  behavior: "smooth",
                });
              }
            }}
          >
            {item}
          </p>
        ))}
      </div>
      <div
        className="sm:hidden flex flex-col gap-1 ml-1"
        onClick={() => setOpen(!open)}
      >
        {[0, 1, 2].map((i) => (
          <div
            className={twMerge(
              "w-6 h-1 rounded-full bg-red-900 transition-transform duration-500 ease-in-out",
              open && [
                "rotate-45 translate-y-2", 
                "-rotate-45", 
                "-rotate-45 -translate-y-2"
              ][i]
            )}
            key={i}
          />
        ))}
      </div>
    </nav>
  );
}
