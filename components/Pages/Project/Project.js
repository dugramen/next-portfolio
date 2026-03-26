import React from "react";

export default function Project(props) {
  const repo = props.repo;
  // const [focused, setFocused] = React.useState(false);
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);

  React.useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
    );
  }, []);

  return (
    <div className=" ScrollView group flex flex-col gap-0 sm:flex-row transition-all">
      <a
        className="img-container min-w-96 max-w-96 overflow-clip shadow-lg shadow-black/50 flex items-center justify-center
          transition-all duration-300 ease-out
          group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black/75
        "
        href={!props.isMobile ? repo.homepageUrl : undefined}
        target="_blank"
        rel="noreferrer"
      >
        <img src={props.src} alt="" className="group-hover:-translate-x-5/ h-full w-96 transition-all duration-300" />
      </a>

      <div className="flex flex-col gap-1 min-w-96 max-w-96 flex-1 p-8">
        <a
          className="flex flex-col gap-2"
          href={!props.isMobile ? repo.homepageUrl : undefined}
          target="_blank"
          rel="noreferrer"
        >
          <h2 className="font-extrabold text-black/75 text-3xl line-clamp-1 mb-2">
            {props.title
              ?.replaceAll("-", " ")
              .split(" ")
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(" ")}
          </h2>


          <p className="text-sm opacity-90">{props.description}</p>

        </a>

        <div className="mt-auto flex flex-row items-center">
          <div className="flex flex-row gap-1 flex-wrap">
            {repo.languages.nodes.map((lang) => (
              <div
                key={lang.name}
                className="font-bold text-xs rounded-md py-1 px-3 bg-black/50 text-white"
              //   style={{color: lang.color}}
              >
                {lang.name}
              </div>
            ))}
          </div>

          <a className="github ml-auto" href={repo.url} target="_blank" rel="noreferrer">
            <button className="gradient-button py-1">GitHub</button>
          </a>

          {props.isMobile && (
            <a
              className="website-link"
              href={repo.homepageUrl}
              target="_blank"
              rel="noreferrer"
            >
              <button className="gradient-button py-1">Try out</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

Project.defaultProps = {
  title: "Title",
  description: "Short description",
};
