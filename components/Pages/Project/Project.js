import Link from "next/link";
import React from "react";

export default function Project(props) {
    const repo = props.repo
    const [focused, setFocused] = React.useState(false)
    const [isTouchDevice, setIsTouchDevice] = React.useState(false)
    // let isTouchDevice = false

    React.useEffect(() => {
        setIsTouchDevice( ( 'ontouchstart' in window )
            || ( navigator.maxTouchPoints > 0 )
            || ( navigator.msMaxTouchPoints > 0 )
        )
    }, [])

    return (
    <div 
        className="Project"
        href={!props.isMobile && props.homepageUrl}
    >

        <a 
            className="img-container"
            href={!props.isMobile && repo.homepageUrl}
            target='_blank'
            rel="noreferrer"
        >
            <img
                src={props.src}
            />
        </a>

        {/* <a
            href={!props.isMobile && props.homepageUrl}
            target='_blank'
        >
        </a> */}
        <a 
            className="text-container"
            href={!props.isMobile ? repo.homepageUrl : "false"}
            target='_blank'
            rel="noreferrer"
            // onClick={() => isMobile && window.open()}
        >  
            <h2>{props.title?.replaceAll('-', ' ')
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')
            }</h2>
            <p>{props.description}</p>
        </a>

        <div className="button-slider">
            <a
                className="github"
                href={repo.url}
                target='_blank'
                rel="noreferrer"
            >
                <button>
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
                <button>
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