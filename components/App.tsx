import React, { useEffect } from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import { twMerge } from "tailwind-merge";
// import { useWindowScroll } from "@uidotdev/usehooks";
import { useScrollBreakpoint } from "./Pages/components";

export default function App({ repos }) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  // const [topLerp, setTopLerp] = React.useState(0)
  // const [atTop, setAtTop] = React.useState(true);
  const pages = ["Skills", "Portfolio", "Contact"];

  const atTop = !useScrollBreakpoint(100);

  // const [pos] = useWindowScroll();

  // useEffect(() => {
  //   const listener = () => {
  //     console.log('scroll', window.scrollY)
  //     setAtTop(window.scrollY > 100)
  //   }
  //   window.addEventListener('scroll', listener)
  //   return window.removeEventListener('scroll', listener)
  // }, [])

  // useEffect(() => {
  //   setAtTop((old) => {
  //     return (pos.y ?? 0) < 100
  //     // if (containerRef.current) {
  //     //   return containerRef.current.scrollTop <= 100;
  //     // } else {
  //     //   return old;
  //     // }
  //   });
  // }, [pos])

  // function handleScroll() {
  //   // setTopLerp(old => {
  //   //   if (containerRef.current) {
  //   //     return Math.min(containerRef.current.scrollTop / window.innerHeight, 1)
  //   //   } else {return old}
  //   // })

  //   setAtTop((old) => {
  //     if (containerRef.current) {
  //       return containerRef.current.scrollTop <= 100;
  //     } else {
  //       return old;
  //     }
  //   });

  //   // setAtTop(window.pageYOffset === 0)
  // }

  // React.useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  return (
    <div className={"App " + (atTop ? "scroll-top" : "scroll-not-top")}>
      <div
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
      />
      <div
        className="fixed inset-0 GradientFg pointer-events-none"
        style={{ zIndex: 20 }}
      />

      {/* <div className='stationary'/> */}

      <NavBar pages={pages} scrollContainer={containerRef.current} />

      <div
        className="flex flex-col gap-4 p-0"
        ref={containerRef}
        style={{
          overflowY: 'visible'
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
  return (
    <nav
      className={`Navbar`}
      style={{
        // transform: `translateY(${(1-topLerp) * window.innerHeight}px)`
        zIndex: 100,
      }}
    >
      <p className="name">Koliur Rahman</p>
      <button className="nav-resume gradient-button">Resume</button>
      {pages.map((item) => (
        <p
          className="Nav-item"
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
    </nav>
  );
}
