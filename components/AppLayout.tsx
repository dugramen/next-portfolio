import React, { useEffect, useMemo, useRef, useState } from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import { twMerge } from "tailwind-merge";
// import { useWindowScroll } from "@uidotdev/usehooks";
import { useScrollBreakpoint } from "./Pages/components";

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
            "radial-gradient(circle farthest-side at center , rgba(0, 0, 0, .3), rgba(0, 0, 0, .5))",
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
          className="flex flex-col gap-4 p-0 flex-1 min-w-0 NoScroll sm:ml-96"
          ref={containerRef}
          // onScroll={(e) => {
          //   // console.log("scrolling ", e.currentTarget.scrollTop);
          //   const event = new CustomEvent("custom-scroll", {
          //     detail: e.currentTarget.scrollTop,
          //     bubbles: true,
          //   });
          //   e.target.dispatchEvent(event);
          // }}
          style={{
            // overflowY: "scroll",
            // maskImage: `linear-gradient(transparent 60px, black 120px)`,

            // clipPath: "xywh(0px 64px 100% 100%)"
            // WebkitMaskImage: `linear-gradient(black, transparent)`,
          }}
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

function NavBar({
  pages,
  scrollContainer,
}: {
  pages;
  scrollContainer: HTMLDivElement | null;
}) {
  const [open, setOpen] = useState(false);
  const atTop = !useScrollBreakpoint(ScrollBreakpoint);
  return (
    <nav
      className={`Navbar p-8 fixed top-0 bottom-0 left-0 flex flex-row gap-0 items-start justify-center w-full self-center max-w-[536px]
        
        sm:w-auto sm:bg-red-900 sm:flex-col sm:h-full
        `}
      style={{
        // transform: `translateY(${(1-topLerp) * window.innerHeight}px)`
        zIndex: 100,
        justifyContent: "center",
        backgroundColor: "red",
        backgroundImage:
          "radial-gradient(circle farthest-side at center , rgba(0, 0, 0, .3), rgba(0, 0, 0, .75))",
        backgroundAttachment: "fixed",
        backgroundSize: "100vw 100%",
      }}
    >
      <p
        className="text-4xl px-0 mb-2 text-white/60 text-red-400/ font-black mr-auto translate-y-[2px]"
        style={
          {
            // textShadow: `0px 0px 1.5px rgb(69 10 10 / var(--tw-text-opacity))`
            // textShadow: `0px 0px .5px black`,
          }
        }
      >
        {/* koliur rahman */}
        KOLIUR RAHMAN
      </p>

      <div
        className={twMerge(
          `items-center absolute top-full -translate-y-3 origin-top-right`,
          "flex flex-col",
          `bg-red-950/ rounded-lg `,
          // "animate-[panel-out_.5s_forwards_cubic-bezier(.3,2.0,.7,.7)]",
          "animate-[panel-out_.15s_forwards_ease-out]",
          open &&
            `
            animate-[panel-in_.5s_forwards_cubic-bezier(.3,2.0,.6,.8)]
          `,
          "sm:relative sm:flex sm:flex-col sm:top-auto self-stretch sm:translate-y-0 sm:rounded-2xl sm:px-2 sm:scale-100 sm:animate-none",
        )}
        style={
          {
            // boxShadow: "0px 0px 15px -5px black",
          }
        }
      >
        {pages.map((item, index) => (
          <div
            className={twMerge(
              "px-4 py-2 text-base font-medium transition-all cursor-pointer group text-red-100 w-full grid place-items-center",
              atTop
                ? `-translate-x-32 opacity-0`
                : `opacity-100 transform-none`,
            )}
            style={{
              transitionDuration: atTop ? undefined : `${index * 0.2 + 0.4}s`,
            }}
            key={item}
            onClick={() => {
              const element = document.getElementById(`${item}Header`);
              if (element && scrollContainer) {
                // const scrollTop = scrollContainer?.scrollTop;
                // const elTop = element.offsetTop;
                const elTop = element.getBoundingClientRect().top;
                let top =
                  scrollContainer?.scrollTop +
                  (elTop > 0 ? elTop - window.innerHeight / 2.0 : elTop) -
                  scrollContainer?.offsetTop;
                // console.log(scrollTop, elTop, top);

                scrollContainer?.scrollTo?.({
                  // top: element.offsetTop - 100,
                  top,
                  behavior: "smooth",
                });
              }
            }}
          >
            <div className="transition-all duration-300 text-base group-hover:text-3xl relative">
              <span className="absolute bottom-0 left-full right-0 h-[2px] rounded-full bg-red-100 group-hover:left-0 transition-all origin-center scale-x-90 duration-300" />
              {item}
            </div>
          </div>
        ))}
      </div>

      <button
        className={twMerge(
          "text-red-100 group grid place-items-center relative isolate rounded-xl overflow-clip bg-white/10 border-solid border-0 border-white/10 w-full px-4 py-2 text-base duration-[1s]",
          atTop ? `-translate-x-32 opacity-0` : `opacity-100 transform-none`,
        )}
      >
        <div
          className="absolute -z-10 aspect-square w-full rounded-full bg-white/10 
        transition-all duration-500 scale-0 group-hover:scale-100 group-hover:rounded-xl"
        ></div>
        <div className="transition-all duration-300 group-hover:text-3xl">
          Resume
        </div>
      </button>

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
                ][i],
            )}
            key={i}
          />
        ))}
      </div>
    </nav>
  );
}
