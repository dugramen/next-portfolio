import React from 'react';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';

export default function App({repos}) {
  const containerRef = React.useRef(null)
  // const [topLerp, setTopLerp] = React.useState(0)
  const [atTop, setAtTop] = React.useState(true)
  const pages = [
    "Skills",
    "Portfolio",
    "Contact",
  ] 
  
  function handleScroll() {
    // setTopLerp(old => {
    //   if (containerRef.current) {
    //     return Math.min(containerRef.current.scrollTop / window.innerHeight, 1)
    //   } else {return old}
    // })

    setAtTop(old => {
      if (containerRef.current) {
        return containerRef.current.scrollTop <= window.innerHeight/2.0
      } else {return old}
    })

    // setAtTop(window.pageYOffset === 0)
  }
  
  // React.useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  return (
    <div className={"App " + (atTop ? 'scroll-top' : 'scroll-not-top')}>
      <div className='background static'/>
      <div className={`background bg-gradient ${atTop ? 'top' : 'bottom'}` }/>

      {/* <div className='stationary'/> */}

      <NavBar pages={pages} scrollContainer={containerRef.current}/>

      <div 
        className='Pages-container' 
        ref={containerRef} 
        onScroll={handleScroll}
        onResize={handleScroll}
      >
        
        <About/>
        <Skills/>
        <Projects repos={repos}/>
        <Contact/>

      </div>
    </div>
  );
}

function NavBar({pages, scrollContainer}) {
  return (
    <nav className={`Navbar`} style={{
      // transform: `translateY(${(1-topLerp) * window.innerHeight}px)`
    }}>
      <p className='name'>Koliur Rahman</p>
      <button className='nav-resume gradient-button'>
        Resume
      </button>
      {pages.map(item => (
        <p 
          className='Nav-item' 
          key={item}
          onClick={() => {
            const element = document.getElementById(`${item}Page`)
            if (element) {
              scrollContainer?.scrollTo?.({
                top: element.offsetTop - 100,
                behavior: 'smooth'
              });
            }
          }}
        >{item}</p>
      ))}
    </nav>
  )
}