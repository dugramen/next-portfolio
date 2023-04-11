import React from "react";
import Image from "next/image";

function injectStyle(style) {
    const styleElement = document.createElement('style');
    let styleSheet = null;

    document.head.appendChild(styleElement);

    styleSheet = styleElement.sheet;

    styleSheet.insertRule(style, styleSheet.cssRules.length);
}

function Icon({name, path}) {
    const [mousePos, setMousePos] = React.useState([0, 0, null])
    const [clip, setClip] = React.useState(`circle(${name===mousePos[2]? 150: 0}% at ${mousePos[0]}px ${mousePos[1]}px)`)

    React.useEffect(() => {
        requestAnimationFrame(() => setClip(`circle(${name===mousePos[2]? 150: 0}% at ${mousePos[0]}px ${mousePos[1]}px)`))
    }, [mousePos[0], mousePos[1], mousePos[3]])

    return (
    <div 
        className="skill"
        onMouseEnter={(e) => {
            const {top, left} = e.currentTarget.getBoundingClientRect()
            setMousePos([e.clientX - left, e.clientY - top, name])
            setClip(``)
        }}
        onMouseLeave={(e) => {
            const {top, left} = e.currentTarget.getBoundingClientRect()
            setMousePos([e.clientX - left, e.clientY - top, null])
        }}
    >
        <div className="skill-icon">
            <Image
                className="underlay"
                src={path}
                width={80}
                height={80}
                alt='img'
                
            />
            
            <Image
                className="overlay"
                src={path}
                width={80}
                height={80}
                alt='img'
                style={{
                    transition: clip === '' ? `0s` : `.3s ease-out`,
                    clipPath: clip === ''
                        ? `circle(0% at ${mousePos[0]}px ${mousePos[1]}px)`
                        : clip,
                }}
            />
        </div>

        <p>
            {name}
        </p>
    </div>
    )
}


export default function Skills(props) {
    const skills = [
        'HTML', 'CSS', 'JavaScript',
        'React', 'SASS', 'TypeScript',
        'NextJS', 'MySQL',
        'C++', 'Python', 'Godot'
    ].reduce((accum, val) => {
        return {
            ...accum,
            [val]: '/SkillsIcons/' + val.toLowerCase() + '.svg'
        }
    }, {})

    const [mousePos, setMousePos] = React.useState([0, 0, null])

    return (
    <div className="Page SkillPage" >
        <h1 id="SkillsPage">Skills</h1>
        <div className="skill-container">
            {Object.keys(skills).map(v => (
                <Icon
                    key={v}
                    name={v}
                    path={skills[v]}
                />
            ))}
        </div>
    </div>
    )
}