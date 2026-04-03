"use client";

import {
  ComponentProps,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";
import { useWindowScroll } from "@uidotdev/usehooks";
import { ScrollBreakpoint } from "../AppLayout";

export function Page(
  p: ComponentProps<"div"> & { inner?: ComponentProps<"div"> },
) {
  // const { ref, inView } = useInView({ });
  // const [inView, setInView] = useState(false);
  // const [pos, scrollTo] = useWindowScroll();
  const [startingPos, setStartingPos] = useState(Infinity);
  const inView = useScrollBreakpoint(
    // ScrollBreakpoint
    // startingPos
    startingPos - (typeof window !== "undefined" ? (window.innerHeight * 0.25) : 0),
    // startingPos - ScrollBreakpoint,
  );
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (pageRef.current && !Number.isFinite(startingPos)) {
      // const { top } = pageRef.current.getBoundingClientRect();
      const top = pageRef.current.offsetTop;
      // console.log(p.className, top);
      setStartingPos(top + window.scrollY);
      console.log("stop ---- ", top + window.scrollY);
      // setStartingPos(top);
      // startingPos.current = r.scrollTop;
    }
  }, []);

  return (
    <div
      {...p}
      className={twMerge(
        `Page
        `,
        p.className,
      )}
      style={{
        ...p.style,
      }}
      ref={pageRef}
    >
      <div
        {...p.inner}
        className={twMerge(
          "flex flex-col items-center justify-center gap-0 min-h-0 flex-1",
          // "transition-all duration-500",
          "transition-all duration-700 translate-y-[100vh] opacity-50",
          inView && "translate-y-0 opacity-100",
          // inView && "-translate-y-[50vh]",
          p.inner?.className,
        )}
      >
        {/* <div>
          {`${startingPos} ${typeof window !== "undefined" ? window.innerHeight : 0}`}
        </div> */}
        {p.children}
      </div>
    </div>
  );
}

export function useScrollBreakpoint(breakpoint: number) {
  const [scrolledPast, setScrolledPast] = useState(false);
  useEffect(() => {
    // console.log("breakpoint ", breakpoint);
    const listener = ((e: CustomEvent) => {
      // console.log('sy ', window.scrollY)
      // console.log("recieve scroll ", e)

      // setScrolledPast(e.detail > breakpoint);
      setScrolledPast(window.scrollY > breakpoint);
    }) as EventListener;
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
    // window.addEventListener("custom-scroll", listener);
    // return () => window.removeEventListener("custom-scroll", listener);
  }, [breakpoint]);

  return scrolledPast;
}
