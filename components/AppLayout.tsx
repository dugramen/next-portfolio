import React, { useEffect, useMemo, useRef, useState } from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import { twMerge } from "tailwind-merge";
// import { useWindowScroll } from "@uidotdev/usehooks";
import { useScrollBreakpoint } from "./Pages/PageComponent";
import { NavBar } from "./Pages/Navbar";

export const ScrollBreakpoint = 100;

export function AppLayout({ repos }) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  // const [topLerp, setTopLerp] = React.useState(0)
  // const [atTop, setAtTop] = React.useState(true);
  const pages = ["Skills", "Portfolio", "Contact"];

  const atTop = !useScrollBreakpoint(ScrollBreakpoint);

  console.log({ atTop });

  return (
    <div className={"App h-full " + (atTop ? "scroll-top" : "scroll-not-top")}>
      <div
        className="fixed inset-0 GradientFg pointer-events-none"
        style={{ zIndex: 20 }}
      />

      <div
        className={twMerge(
          "fixed left-0 right-0 top-0 h-[100vh] -z-50 transition-all duration-700",
          atTop && "duration-300",
        )}
        style={{
          background:
            "radial-gradient(circle farthest-side at center , rgba(0, 0, 0, .1), rgba(0, 0, 0, .4))",
          // filter: atTop ? "" : "brightness(1.)",
        }}
      >
        <div
          className={twMerge("absolute inset-0 transition-all duration-500")}
          style={{
            width: "100%",
            height: "100%",
            opacity: atTop ? 1 : 0,
            backgroundImage:
              "radial-gradient(circle farthest-side at center , rgba(150, 0, 0, 1), rgba(50, 0, 0, 1))",
          }}
        ></div>
      </div>

      <About />

      <div className="flex flex-col sm:flex-row sm:items-start h-full w-full">
        <NavBar pages={pages} scrollContainer={containerRef.current} />

        <div
          className={twMerge(
            "flex flex-col gap-8 p-0 flex-1 min-w-0 NoScroll sm:ml-96",
            "transition-all duration-500",
            atTop && "translate-y-[50vh] opacity-0",
          )}
          ref={containerRef}
          // onScroll={(e) => {
          //   // console.log("scrolling ", e.currentTarget.scrollTop);
          //   const event = new CustomEvent("custom-scroll", {
          //     detail: e.currentTarget.scrollTop,
          //     bubbles: true,
          //   });
          //   e.target.dispatchEvent(event);
          // }}
          style={
            {
              // overflowY: "scroll",
              // maskImage: `linear-gradient(transparent 60px, black 120px)`,
              // clipPath: "xywh(0px 64px 100% 100%)"
              // WebkitMaskImage: `linear-gradient(black, transparent)`,
            }
          }
          id="scroll-container"
          // onResize={handleScroll}
        >
          <Skills />
          <Projects repos={repos} />
          <Contact />
        </div>
      </div>
    </div>
  );
}
