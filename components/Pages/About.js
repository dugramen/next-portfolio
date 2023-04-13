import React from "react";

export default function About(props) {
    return (
    <div className="AboutPage Page" >
        <div className="text-wrapper">
            <div className="Hello" >Hello</div>

            <div className="break"/>

            <div className="Im"> {"I'm"}</div>
            <div className="Name"> Koliur Rahman,</div> 

            <div className="break"/>
            <div className="break"/>

            <div className="A">A 
                {/* <strong>Web Developer</strong> */}
            </div>
            <div className="Web-Developer"> Web Developer </div> 
            
            <div className="break"/>
            <div className="break"/>

            <div className="calls-to-action">
                <a href="/resume.pdf" download="resume.pdf">
                    <button>Resume</button>
                </a>
                <button onClick={() => {
                    document.getElementById('ContactPage').scrollIntoView()
                }}>Contact</button>
            </div>
            
            <div className="break"/>

            {/* <div className="initial-headers">
                {['Resume', 'About', 'Portfolio', 'Contact'].map(label => (
                    <div className="header">{label}</div>
                ))}
            </div> */}
        </div>


    </div>
    )
}