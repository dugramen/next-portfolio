import React from "react";
import { GradientButton } from "../GradientButton";

export default function Project(props) {
  const repo = props.repo;
  // const [focused, setFocused] = React.useState(false);
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);

  React.useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0,
    );
  }, []);

  return (
    <div className=" ScrollView group flex flex-col items-center gap-0 sm:flex-row transition-all px-2">
      <a
        className="img-container 
        /min-w-[352px] max-w-[352px]
       
        overflow-clip shadow-lg 
        shadow-black/50 flex items-center justify-center
          transition-all duration-300 ease-out
          group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black/75
        "
        href={!props.isMobile ? repo.homepageUrl : undefined}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={props.src}
          alt=""
          className="group-hover:-translate-x-5/ transition-all duration-300"
        />
      </a>

      <div className="flex flex-col gap-1 min-w-96 max-w-96 flex-1 py-8 pl-8 pr-6">
        <a
          className="flex flex-col gap-2"
          href={!props.isMobile ? repo.homepageUrl : undefined}
          target="_blank"
          rel="noreferrer"
        >
          <h2 className="font-extrabold text-black/75 text-3xl line-clamp-1 mb-1">
            {props.title
              ?.replaceAll("-", " ")
              .split(" ")
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(" ")}
          </h2>

          <p className="text-sm font-medium opacity-90 mb-0">{props.description}</p>
        </a>

        <div className="mt-auto flex max-sm:flex-col gap-0 sm:items-center max-sm:items-stretch w-full">
          <div className="flex flex-row gap-1 flex-wrap max-sm:py-2">
            {repo.languages.nodes.map((lang) => (
              <div
                key={lang.name}
                className="font-bold text-xs rounded-md py-1 px-3 flex items-center bg-black/50 text-white/90"
                //   style={{color: lang.color}}
              >
                {lang.name}
              </div>
            ))}
          </div>
          
          <div className="flex-1 flex flex-row gap-2 items-end max-sm:justify-stretch">
            <a
              className="github sm:ml-auto max-sm:flex-1"
              href={repo.url}
              target="_blank"
              rel="noreferrer"
            >
              <GradientButton text="GitHub" className="max-sm:w-full"/>
              {/* <button className="gradient-button py-1">GitHub</button> */}
            </a>

            {props.isMobile && (
              <a
                className="website-link max-sm:flex-1"
                href={repo.homepageUrl}
                target="_blank"
                rel="noreferrer"
              >
                <GradientButton text="Try Out" className="max-sm:w-full"/>
                {/* <button className="gradient-button py-1">Try out</button> */}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Project.defaultProps = {
  title: "Title",
  description: "Short description",
};
