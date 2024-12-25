import { ComponentProps, useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faGraduationCap,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";
import { Page } from "./components";

function injectStyle(style) {
  const styleElement = document.createElement("style");
  let styleSheet: CSSStyleSheet | null = null;

  document.head.appendChild(styleElement);

  styleSheet = styleElement.sheet;

  styleSheet?.insertRule(style, styleSheet.cssRules.length);
}

function Icon({ name, path }) {
  const [mousePos, setMousePos] = useState([0, 0, null]);
  const [clip, setClip] = useState(
    `circle(${name === mousePos[2] ? 150 : 0}% at ${mousePos[0]}px ${
      mousePos[1]
    }px)`
  );

  useEffect(() => {
    requestAnimationFrame(() =>
      setClip(
        `circle(${name === mousePos[2] ? 150 : 0}% at ${mousePos[0]}px ${
          mousePos[1]
        }px)`
      )
    );
  }, [mousePos[0], mousePos[1], mousePos[3]]);

  return (
    <div
      className="skill"
      onMouseEnter={(e) => {
        const { top, left } = e.currentTarget.getBoundingClientRect();
        setMousePos([e.clientX - left, e.clientY - top, name]);
        setClip(``);
      }}
      onMouseLeave={(e) => {
        const { top, left } = e.currentTarget.getBoundingClientRect();
        setMousePos([e.clientX - left, e.clientY - top, null]);
      }}
    >
      <div className="skill-icon">
        <Image
          className="underlay"
          src={path}
          width={80}
          height={80}
          alt="img"
        />

        <Image
          className="overlay"
          src={path}
          width={80}
          height={80}
          alt="img"
          style={{
            transition: clip === "" ? `0s` : `.3s ease-out`,
            clipPath:
              clip === ""
                ? `circle(0% at ${mousePos[0]}px ${mousePos[1]}px)`
                : clip,
          }}
        />
      </div>

      {/* <p>
            {name}
        </p> */}
    </div>
  );
}

export default function Skills(props) {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "NextJS",
    "SASS",
    "NodeJS",
    "MySQL",
    "C++",
    "Python",
    "Godot",
  ].reduce((accum, val) => {
    return {
      ...accum,
      [val]: "/SkillsIcons/" + val.toLowerCase() + ".svg",
    };
  }, {});

  const [mousePos, setMousePos] = useState([0, 0, null]);
  // const {ref, inView} = useInView({threshold: .25});

  return (
    <Page className="SkillPage">
      <h1 id="SkillsHeader">Skills</h1>

      <div className="card-container">
        <div className="info-card">
          <FontAwesomeIcon icon={faGraduationCap} />
          <p>
            Hi, I&apos;m Koliur Rahman, a recent Computer Science graduate from
            LIU Brooklyn. <br />
          </p>
        </div>

        <div className="info-card">
          <FontAwesomeIcon icon={faCode} />
          <p>
            {`I've been programming for several years, with a recent focus on web development. 
                    I build and maintain several projects to constantly improve my front-end skills.
                    `}
            {/* I&apos;ve been programming for 4-5 years now, and have focused my last year on web development.
                        While I don&apos;t have proffesional experience yet, I have worked on several personal projects highlighting my capabilities. */}
          </p>
        </div>

        <div className="info-card">
          <FontAwesomeIcon icon={faGamepad} className="icon" />

          <p>
            {`
                            I also do game and engine development.
                            Recently I've been applying the skills I learn from web development, to build better UI tools for the Godot game engine.
                        `}
            {/* I love video games. 
                        My favorites are platformers and RPGs.
                        I play a lot of indie games, and do some indie game development myself.<br/> */}
          </p>
        </div>

        <div className="info-card vertical">
          Here are the languages and frameworks I use
          <div className="skill-container">
            {Object.keys(skills).map((v) => (
              <Icon key={v} name={v} path={skills[v]} />
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}

// function InfoCard(p: ComponentProps<'div'>) {
//   const [inView, setInView] = useState(false)
//   return (
//     <div className="info-card">
//       {p.children}
//     </div>
//   )
// }
