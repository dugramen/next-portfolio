import { title } from "process";
import React from "react";
import Project from "./Project/Project";
import { Page } from "./components";

export default function Projects(props) {
  const [isMobile, setIsMobile] = React.useState(false);
  const handleIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  React.useEffect(() => {
    handleIsMobile();
    window.addEventListener("resize", handleIsMobile);
    return () => {
      window.removeEventListener("resize", handleIsMobile);
    };
  }, []);
  // console.log(props.repos)

  return (
    <Page className={"ProjectsPage"} id="PortfolioPage">
      <h1>Portfolio</h1>

      <div className="projects-container max-w-[1000px]">
        {props.repos
          ?.filter((r) => r.name !== "next-portfolio")
          // reverse().
          .map((repo) => (
            <Project
              src={repo.openGraphImageUrl}
              title={repo.name}
              description={repo.description}
              repo={repo}
              key={repo.name}
              isMobile={isMobile}
            />
          ))}
      </div>
    </Page>
    // <div className="Page ProjectsPage" id="PortfolioPage">
    // </div>
  );
}
