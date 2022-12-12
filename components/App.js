import React from 'react';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';

export default function App({repos}) {
  const [atTop, setAtTop] = React.useState(true)
  const pages = [
    "Skills",
    "Projects",
    "Contact",
  ] 
  
  function handleScroll() {
    setAtTop(window.pageYOffset === 0)
  }
  
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  const navbar = (
    <nav className={`Navbar`}>
      <p className='name'>Koliur Rahman</p>
      {pages.map(item => (<p 
        className='Nav-item' 
        key={item}
        onClick={() => {
          const element = document.getElementById(`${item}Page`)
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 100,
              behavior: 'smooth'
            });
          }
        }}
      >
          {item}
      </p>))}
    </nav>
  )

  return (
    <div className="App">
      <div className='stationary'>
        
      </div>
      <div className={`floating  ${atTop ? 'top' : ''}`}>
        {navbar}
      </div>

      <div className='Pages-container'>
        
        <About/>
        <Skills/>
        <Projects repos={repos}/>
        <Contact/>

      </div>
    </div>
  );
}
