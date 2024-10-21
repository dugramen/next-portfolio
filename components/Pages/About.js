import React, { Children } from "react";
import { twMerge } from "tailwind-merge";

export default function About(props) {
  return (
    <div className="AboutPage Page">
      <div className="text-wrapper flex flex-col items-center">
        <div className="flex flex-row text-xl">
          <div className="animate-[fade-in-up_.5s_ease-out_.3s_both]">Hello</div>
        </div>

        <div className="flex flex-row NameRow items-end">
          <div className="text-2xl [line-height:42px]"> {"I'm"}</div>
          <div className="font-bold"> Koliur</div>
          <div className="font-bold"> Rahman,</div>
        </div>

        <div
          className="flex flex-row items-end AWebDev"
          style={{ animation: "none", opacity: 1 }}
        >
          {"A Web-Developer".split("").map((letter, i) => (
            <div
              key={i}
              className={twMerge(
                "animate-[fade-slide-in_.3s_ease-out]",
                i > 1 && "font-bold"
              )}
              style={{
                animationDelay: `${1.7 + i * 0.05}s`,
                animationFillMode: "both",
              }}
            >
              {letter}
            </div>
          ))}
        </div>

        <div className="calls-to-action text-xs animate-[fade-in-up_.5s_ease-out_2.5s_both]">
          <a href="/resume.pdf" download="resume.pdf">
            <button>Resume</button>
          </a>
          <button
            onClick={() => {
              document.getElementById("ContactPage").scrollIntoView();
            }}
          >
            Contact
          </button>
        </div>

        <div className="break" />

        {/* <div className="initial-headers">
                {['Resume', 'About', 'Portfolio', 'Contact'].map(label => (
                    <div className="header">{label}</div>
                ))}
            </div> */}
      </div>
    </div>
  );
}
