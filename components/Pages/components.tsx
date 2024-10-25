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

export function Page(
  p: ComponentProps<"div"> & { inner?: ComponentProps<"div"> }
) {
  // const { ref, inView } = useInView({ });
  // const [inView, setInView] = useState(false);
  // const [pos, scrollTo] = useWindowScroll();
  const [startingPos, setStartingPos] = useState(Infinity);
  const inView = useScrollBreakpoint(
    startingPos - (typeof window !== "undefined" ? window.innerHeight : 0)
  );

  return (
    <div
      {...p}
      className={twMerge(
        `Page
        `,
        p.className
      )}
      style={{
        ...p.style,
      }}
      ref={(r) => {
        // ref(r);
        if (r && !Number.isFinite(startingPos)) {
          const { top } = r.getBoundingClientRect();
          console.log(p.className, top);
          setStartingPos(top);
          // startingPos.current = r.scrollTop;
        }
      }}
    >
      <div
        {...p.inner}
        className={twMerge(
          "flex flex-col items-center gap-0",
          "transition-all duration-500",
          inView && "-translate-y-[50vh]",
          p.inner?.className
        )}
      >
        {p.children}
      </div>
    </div>
  );
}

export function useScrollBreakpoint(breakpoint: number) {
  const [scrolledPast, setScrolledPast] = useState(false);
  useEffect(() => {
    console.log("breakpoint ", breakpoint);
    const listener = () => {
      // console.log('sy ', window.scrollY)
      setScrolledPast(window.scrollY > breakpoint);
    };
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, [breakpoint]);

  return scrolledPast;
}
