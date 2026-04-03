import { twMerge } from "tailwind-merge";
import { useScrollBreakpoint } from "./PageComponent";
import { ScrollBreakpoint } from "../AppLayout";
import { useEffect, useState } from "react";

export function NavBar({
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
      className={`
        Navbar px-8 py-4 sm:py-8 fixed top-0 sm:bottom-0 left-0 
        flex flex-row gap-2 sm:gap-0 items-start justify-center self-center max-w-[536px]
        sm:w-auto sm:bg-red-900 sm:flex-col sm:h-full
        //max-sm:rounded-b-2xl 
        //max-sm:left-2 
        //max-sm:right-2
        max-sm:drop-shadow-xl max-sm:shadow-black/50 max-sm:w-full
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
        className="text-lg sm:text-4xl max-sm:leading-4 px-0 mb-2 text-white/60 text-red-400/ font-black mr-auto translate-y-[2px]"
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
              const element = document.getElementById(`${item}Page`);
              if (element) {
                const elTop = element.getBoundingClientRect().top;
                let top = elTop;
                scrollBy?.({
                  top,
                  behavior: "smooth",
                });
              }
            }}
          >
            <div className="transition-all duration-300 text-base group-hover:text-3xl relative pointer-events-none">
              <span className="absolute bottom-0 left-full right-0 h-[2px] rounded-full bg-red-100 pointer-events-none group-hover:left-0 transition-all origin-center scale-x-90 duration-300" />
              {item}
            </div>
          </div>
        ))}
      </div>

      <a
        href="https://drive.google.com/file/d/12ecqEhloC4Po-5auHFOmKznScKvYkSV1/view"
        target="_blank"
        rel="noreferrer"
        className="w-full"
      >
        <button
          className={twMerge(
            "text-red-100 group grid place-items-center relative isolate rounded-xl overflow-clip bg-white/10 border-solid border-0 border-white/10",
            "min-w-0 w-full px-2 sm:px-4 py-2 text-base duration-[1s]",
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
      </a>

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
