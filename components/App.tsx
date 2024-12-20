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
    <div className={"App h-full " + (atTop ? "scroll-top" : "scroll-not-top")}>
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
        className="flex flex-col gap-4 p-0 max-h-full"
        ref={containerRef}
        style={{
          overflowY: "scroll",
          // maskImage: `linear-gradient(transparent 60px, black 120px)`,

          clipPath: "xywh(0px 72px 100% 100%)"
          // WebkitMaskImage: `linear-gradient(black, transparent)`,
        }}
        onScroll={(e) => {
          // console.log("scrolling ", e.currentTarget.scrollTop);
          const event = new CustomEvent("custom-scroll", {
            detail: e.currentTarget.scrollTop,
            bubbles: true,
          });
          e.target.dispatchEvent(event);
        }}
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
      className={`Navbar p-5 relative flex flex-row items-center `}
      style={{
        // transform: `translateY(${(1-topLerp) * window.innerHeight}px)`
        zIndex: 100,
      }}
    >
      <p className="text-2xl text-red-900 font-extrabold -m-5 p-5">
        Koliur Rahman
      </p>
      <button className="nav-resume gradient-button ml-auto">Resume</button>

      <div
        className={twMerge(
          `NavItemsPanel items-center absolute top-full -translate-y-3 origin-top-right`,
          "flex flex-col",
          `backdrop-blur-sm bg-black/10 shadow-sm rounded-lg `,
          // "animate-[panel-out_.5s_forwards_cubic-bezier(.3,2.0,.7,.7)]",
          "animate-[panel-out_.15s_forwards_ease-out]",
          open &&
            `
            animate-[panel-in_.5s_forwards_cubic-bezier(.3,2.0,.7,.7)]
          `,
          "sm:relative sm:flex sm:flex-row sm:top-auto sm:translate-y-0 sm:rounded-full sm:px-2 sm:scale-100 sm:animate-none"
        )}
      >
        {pages.map((item) => (
          <p
            className={twMerge("Nav-item px-4 py-2 text-xs font-medium")}
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
        onBlur={() => {
          setOpen(false);
        }}
        tabIndex={0}
      >
        {[0, 1, 2].map((i) => (
          <div
            className={twMerge(
              "w-6 h-1 rounded-full bg-red-900 transition-transform duration-500 ease-in-out",
              open &&
                [
                  "rotate-45 translate-y-2",
                  "-rotate-45",
                  "-rotate-45 -translate-y-2",
                ][i]
            )}
            key={i}
          />
        ))}
      </div>
    </nav>
  );
}
