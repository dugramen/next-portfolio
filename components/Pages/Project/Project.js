import React from "react";
import Image from "next/image";

export default function Project(props) {
  const repo = props.repo;
  const [focused, setFocused] = React.useState(false);
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);

  React.useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
    );
  }, []);

  return (
    <div className="Project bg-black/10 ScrollView">
      <a
        className="img-container"
        href={!props.isMobile ? repo.homepageUrl : undefined}
        target="_blank"
        rel="noreferrer"
      >
        <img src={props.src} alt="" />
      </a>

      <a
        className="text-container gap-4"
        href={!props.isMobile ? repo.homepageUrl : undefined}
        target="_blank"
        rel="noreferrer"
      >
        <h2 className="font-bold text-2xl">
          {props.title
            ?.replaceAll("-", " ")
            .split(" ")
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ")}
        </h2>

        <div className="chips-container">
          {repo.languages.nodes.map((lang) => (
            <div
              key={lang.name}
              className="font-bold text-xs rounded-md py-1 px-3 bg-red-900 text-white"
            //   style={{color: lang.color}}
            >
              {lang.name}
            </div>
          ))}
        </div>

        <p className="text-sm opacity-90 pb-3">{props.description}</p>
      </a>

      <div className="button-slider">
        <a className="github" href={repo.url} target="_blank" rel="noreferrer">
          <button className="gradient-button">GitHub</button>
        </a>

        {props.isMobile && (
          <a
            className="website-link"
            href={repo.homepageUrl}
            target="_blank"
            rel="noreferrer"
          >
            <button className="gradient-button">Try out</button>
          </a>
        )}
      </div>
    </div>
  );
}

Project.defaultProps = {
  title: "Title",
  description: "Short description",
};
