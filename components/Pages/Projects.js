import React from "react";
import Project from "./Project/Project";

export default function Projects(props) {
    const [isMobile, setIsMobile] = React.useState(false)
    const handleIsMobile = () => {
        setIsMobile(window.innerWidth <= 768)
    }
    React.useEffect(() => {
        handleIsMobile()
        window.addEventListener('resize', handleIsMobile)
        return () => {
            window.removeEventListener('resize', handleIsMobile)
        }
    }, [])

    return (
    <div className="Page ProjectsPage" id="ProjectsPage">
        <h1>Projects</h1>
        <div className="projects-container">
            {props.repos?.map(repo => (
                <Project
                    src={repo.openGraphImageUrl}
                    title={repo.name}
                    description={repo.description}
                    repo={repo}
                    key={repo.name}
                    isMobile={isMobile}
                />
            ))}

            {/* <Project
                src='https://user-images.githubusercontent.com/54819319/182956410-08330231-8c59-4e4d-a64e-faf6e476003f.jpg'
                title='GD Paint'
                description='Image & Sprite Editing program for the Godot Engine'
                github='https://github.com/dugramen/GDPaint'
                isMobile={isMobile}
                />
            <Project
                src='https://user-images.githubusercontent.com/54819319/182954981-a05d52e4-a95f-4220-8984-035017ecfe4c.jpg'
                title='Rich Notes'
                description='Note taking App with Rich Text'
                github='https://github.com/dugramen/rich-notes'
                isMobile={isMobile}
                />
            <Project
                src='https://user-images.githubusercontent.com/54819319/187565412-d1680a8b-ce60-4f0f-93d7-1daf4f2b8759.jpg'
                title='Image Subtractor'
                description='A tool to extract pixels from 2 images based on how similar or different they are'
                github='https://github.com/dugramen/image-subtractor'
                isMobile={isMobile}
                />
            <Project
                src='https://user-images.githubusercontent.com/54819319/188955000-cecf4675-e999-4388-b5ed-052313583a8e.jpg'
                title='Tile Flip Game'
                description='Clicking a tile flips surrounding tiles, and you win if all tiles face upwards'
                github='https://github.com/dugramen/tile-flip-game'
                isMobile={isMobile}
            /> */}
        </div>
    </div>
    )
}