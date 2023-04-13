import Link from "next/link";
import React from "react";
// import { GitHubDataContext } from "../../../pages";

export default function Project(props) {
    const repo = props.repo
    const [focused, setFocused] = React.useState(false)
    const [isTouchDevice, setIsTouchDevice] = React.useState(false)

    React.useEffect(() => {
        setIsTouchDevice( ( 'ontouchstart' in window )
            || ( navigator.maxTouchPoints > 0 )
            || ( navigator.msMaxTouchPoints > 0 )
        )
    }, [])

    return (
    <div 
        className="Project"
    >

        <a 
            className="img-container"
            href={!props.isMobile ? repo.homepageUrl : undefined}
            target='_blank'
            rel="noreferrer"
        >
            <img
                src={props.src}
                alt=''
            />
        </a>


        <a 
            className="text-container"
            href={!props.isMobile ? repo.homepageUrl : undefined}
            target='_blank'
            rel="noreferrer"
        >  
            <h2>{props.title?.replaceAll('-', ' ')
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')
            }</h2>

            <div className="chips-container">
                {repo.languages.nodes.map(lang => (
                    <div 
                        className="chip" 
                        // style={{backgroundColor: lang.color}}
                    >
                        {lang.name}
                    </div>
                ))}
            </div>
            
            <p>{props.description}</p>

        </a>

        <div className="button-slider">
            <a
                className="github"
                href={repo.url}
                target='_blank'
                rel="noreferrer"
            >
                <button className="gradient-button">
                    GitHub
                </button>
            </a>

            {props.isMobile && 
            <a
                className="website-link"
                href={repo.homepageUrl}
                target='_blank'
                rel="noreferrer"
            >
                <button className="gradient-button">
                    Try out
                </button>
            </a>}
        </div>

    </div>
    )
}

Project.defaultProps = {
    title: "Title",
    description: "Short description"
}