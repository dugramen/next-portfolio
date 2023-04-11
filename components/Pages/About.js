import React from "react";

export default function About(props) {
    return (
    <div className="Page AboutPage" style={{
        fontSize: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '25vh',
    }}>
        <div className="HomePage-hello" style={{
            fontSize: '1rem'
        }}
        >Hello </div>

        <div style={{
            display: 'inline',
        }}
        > {"I'm"}
            <span style={{
                fontWeight: 'bold',
                fontSize: '2rem',
            }}
            > Koliur Rahman, </span> 
        </div>

        <div style={{
            display: 'inline',
        }}
        > A
            <span style={{
                fontWeight: 'bold',
                fontSize: '2rem',
            }}
            > Software Developer </span> 
        </div>

        <div className="calls-to-action">
            <a href="/resume.pdf" download="resume.pdf">
                <button>Resume</button>
            </a>

            <button onClick={() => {
                document.getElementById('ContactPage').scrollIntoView()
            }}>Contact</button>
        </div>
    </div>
    )
}