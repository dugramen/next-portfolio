import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faGraduationCap, faCode } from '@fortawesome/free-solid-svg-icons'

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

        {/* <p>
            {name}
        </p> */}
    </div>
    )
}


export default function Skills(props) {
    const skills = [
        'HTML', 
        'CSS', 
        'JavaScript',
        'TypeScript',
        'React', 
        'NextJS', 
        'SASS', 
        'NodeJS',
        'MySQL',
        'C++', 
        'Python', 
        'Godot'
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

        <div className="card-container">
            <div className="info-card">
                <FontAwesomeIcon icon={faGraduationCap}/>
                <p>
                    Hi, I'm Koliur Rahman, a recent Computer Science graduate from LIU Brooklyn. <br/>
                </p>
            </div>

            <div className="info-card">
                <FontAwesomeIcon icon={faCode}/>
                <p>
                    I've been programming for 4-5 years now, and have focused my last year on web development.
                    While I don't have proffesional experience yet, I have worked on several personal projects highlighting my capabilities.
                </p>
            </div>

            <div className="info-card">
                <FontAwesomeIcon icon={faGamepad} className="icon"/>

                <p>
                    I love video games. 
                    My favorites are platformers and RPGs.
                    I play a lot of indie games, and do some indie game development myself.<br/>
                    
                </p>
            </div>

            <div className="info-card vertical">
                Here are the languages and frameworks I use
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

        </div>


    </div>
    )
}