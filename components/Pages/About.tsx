import React, { Children, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useScrollBreakpoint } from "./PageComponent";
import { ScrollBreakpoint } from "../AppLayout";

export default function About(props) {
  console.log("about rerender");

  const [started, setStarted] = useState(false);
  // const [atTop, setAtTop] = useState(true);
  const atTop = !useScrollBreakpoint(ScrollBreakpoint);

  // useEffect(() => {
  //   const listener = ((e: CustomEvent) => {
  //     setAtTop(e.detail <= ScrollBreakpoint);
  //   }) as EventListener;
  //   window.addEventListener("custom-scroll", listener);
  //   return () => window.removeEventListener("custom-scroll", listener);
  // }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      setStarted(true);
    }, 500);
    return () => {
      clearTimeout(t);
    };
  }, []);

  return (
    <div
      className="AboutPage Page p-0"
      style={{
        zIndex: 20,
        transform: "none",
        marginBottom: "-50vh",
      }}
    >
      {/* <div className={`background bg-gradient`} /> */}

      {/* <Three/> */}

      {started && (
        <div
          className={twMerge(
            "text-wrapper flex flex-col items-center justify-center pointer-events-auto",
            !atTop && "pointer-events-none",
          )}
          // onWheel={(e) => {
          //   console.log(e.deltaY);
          //   if (e.deltaY > 0) {
          //     setAtTop(false);
          //     document
          //       .getElementById("scroll-container")
          //       ?.scrollBy({ top: e.deltaY });
          //     // const event = new CustomEvent("custom-scroll", {
          //     //   detail: e.currentTarget.scrollTop,
          //     //   bubbles: true,
          //     // });
          //     // e.target.dispatchEvent(event);
          //   }
          // }}
          // onClick={() => {
          //   setAtTop(false);
          //   document
          //       .getElementById("scroll-container")
          //       ?.scrollBy({ top: 100 });
          // }}
        >
          <div className="flex flex-row text-xl ScrollView">
            <div className="animate-[fade-in-up_.5s_ease-out_.3s_both] ">
              Hello
            </div>
          </div>

          <div
            className="flex flex-row items-end AWebDev ScrollView "
            // style={{ animation: "none", opacity: 1 }}
          >
            {"I'm Koliur Rahman,".split("").map((letter, i) => (
              <div
                key={i}
                className={twMerge(
                  "animate-[fade-slide-in_.8s_cubic-bezier(.4,2,.7,.8)] text-2xl",
                  i > 3 && "font-bold text-3xl //text-red-900",
                )}
                style={{
                  animationDelay: `${0.6 + i * 0.04}s`,
                  animationFillMode: "both",
                }}
              >
                {letter}
              </div>
            ))}
          </div>

          <div className="grid animate-[expand-h_1.3s_1.5s_cubic-bezier(.3,1.4,.6,.395)_both] ">
            <div className="flex flex-row items-end overflow-hidden ScrollView">
              <div className="text-2xl">A</div>
              <div className="text-3xl font-bold //text-red-900">
                {" "}
                Web-Developer
              </div>
            </div>
          </div>

          <div
            className="calls-to-action text-xs [&>*]:animate-[fade-in-up_.7s_cubic-bezier(.4,1.8,.7,.9)_2.6s_both] ScrollView"
            style={{
              gap: "16px",
            }}
          >
            {/* <a href="/resume.pdf" download="resume.pdf"> */}
            <a href="https://drive.google.com/file/d/12ecqEhloC4Po-5auHFOmKznScKvYkSV1/view" target="_blank" rel="noreferrer">
              <button>Resume</button>
            </a>
            <button
              style={{
                animationDelay: "2.7s",
              }}
              onClick={() => {
                document.getElementById("ContactPage")?.scrollIntoView();
              }}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
