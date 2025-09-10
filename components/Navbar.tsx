import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function NavBar(p: ComponentProps<'nav'>) {
  return (
    <nav
      {...p}
      className={twMerge(`Navbar py-0 pl-2 translate-x-3 top-0 flex flex-row items-start relative`, p.className)}
      style={{
        zIndex: 100,
      }}
    >
      {/* <p className="text-lg text-red-900 font-black -m-5 p-5 translate-y-[2px]">
        Koliur Rahman
      </p> */}
      {/* <button className="nav-resume gradient-button ml-auto">Resume</button> */}
      <button className="
        ml-auto text-xs font-semibold text-black bg-neutral-400/90 rounded-full py-[6px] mr-2
       hover:bg-neutral-300 hover:text-red-800 
      ">Resume</button>

      <div
        className={twMerge(
          `NavItemsPanel items-center absolute top-full -translate-y-3 origin-top-right`,
          "flex flex-col",
          `bg-neutral-400/90 rounded-lg`,
          // "animate-[panel-out_.5s_forwards_cubic-bezier(.3,2.0,.7,.7)]",
          "scale-0 has-[+*:focus]:scale-100 transition-all duration-500 has-[+*:focus]:ease-[cubic-bezier(.3,2.0,.7,.8)]",
          // "animate-[panel-out_.15s_forwards_ease-out]",
          // "peer-hover:animate-[panel-in_.5s_both_cubic-bezier(.3,2.0,.6,.8)]",
          "sm:relative sm:flex sm:flex-row sm:top-auto sm:translate-y-0 sm:rounded-full sm:px-2 sm:scale-100 sm:animate-none"
        )}
        style={{
          boxShadow: "0px 0px 10px -5px black",
        }}
      >
        {["Skills", "Portfolio", "Contact"].map((item) => (
          <a
            className={twMerge("Nav-item px-2 py-2 text-xs font-semibold")}
            key={item}
            href={`#${item}Page`}
          >
            {item}
          </a>
        ))}
      </div>

      <div
        className="sm:hidden flex flex-col gap-[4px] ml-1 peer group"
        // className="sm:hidden flex flex-col gap-1 ml-1"
        // onClick={() => setOpen(!open)}
        // onBlur={() => {
        //   setOpen(false);
        // }}
        tabIndex={0}
      >
        {[0, 1, 2].map((i) => (
          <div
            className={twMerge(
              "w-7 h-[3px] rounded-full bg-neutral-400 transition-transform duration-500 ease-in-out",
              // "w-6 h-1 rounded-full bg-red-900 transition-transform duration-500 ease-in-out",
              "group-hover:first:rotate-45 group-hover:first:translate-y-[7px]",
              "group-hover:[&:nth-child(2)]:-rotate-45",
              "group-hover:[&:nth-child(3)]:-rotate-45 group-hover:[&:nth-child(3)]:-translate-y-[7px]"
              // open &&
              //   [
              //     "rotate-45 translate-y-2",
              //     "-rotate-45",
              //     "-rotate-45 -translate-y-2",
              //   ][i]
            )}
            key={i}
          />
        ))}
      </div>
    </nav>
  );
}
