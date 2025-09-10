import { ComponentProps, useState, useEffect } from "react";
import Image from "next/image";
import { Page } from "./components";
import { FaCode, FaGamepad, FaGraduationCap } from "react-icons/fa";

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
      className="skill relative flex flex-col items-center group"
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
      <div className="skill-icon transition-transform duration-300 group-hover:-translate-y-3" style={{}}>
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

      <div className="text-xs font-bold transition-all duration-300 absolute bottom-2 opacity-0 scale-50
        group-hover:opacity-100 group-hover:translate-y-full group-hover:scale-100">
        {name}
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
          <FaGraduationCap className="min-w-10" />
          <p>
            Hi, I&apos;m Koliur Rahman, a Computer Science graduate from LIU
            Brooklyn. <br />
          </p>
        </div>

        <div className="info-card">
          <FaCode className="min-w-10" />
          <p>
            {`I've been programming for several years, with a focus on web & game UI. 
                    I build and maintain several projects to constantly improve my front-end skills.
                    `}
            {/* I&apos;ve been programming for 4-5 years now, and have focused my last year on web development.
                        While I don&apos;t have proffesional experience yet, I have worked on several personal projects highlighting my capabilities. */}
          </p>
        </div>

        <div className="info-card">
          <FaGamepad className="min-w-10" />

          <p>
            {`
                            I'm also an open source contributor to the Godot Game Engine.
                            I build plugins and contribute code to improve the Editor UI and UX.
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
