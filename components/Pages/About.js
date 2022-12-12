import React from "react";

export default function About(props) {
    return (
    <div className="Page AboutPage" style={{
        fontSize: '2rem',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: '25vh',
    }}>
        {/* <h1>About</h1> */}
        <div style={{
            fontSize: '1rem'
        }}
        >Hello </div>

        <div style={{
            display: 'inline',
        }}
        > {"I'm"}
            <span style={{
                // color: 'rebeccapurple',
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
                // color: 'purple',
                fontWeight: 'bold',
                fontSize: '2rem',
            }}
            > Software Developer </span> 
        </div>

        <div className="calls-to-action">
            <a href="/resume.pdf" download="resume.pdf">
                {/* Download */}
                <button>Resume</button>
            </a>

            <button onClick={() => {
                // document.body.scrollTop = 0; 
                // document.documentElement.scrollTop = 0;
                document.getElementById('ContactPage').scrollIntoView()
            }}>Contact</button>
        </div>
    </div>
    )
}