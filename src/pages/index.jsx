import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import NavBar from '../components/Navbar'


export default function Home() {
  return (
    <>
    <NavBar/>
    <Main />
    <About />
    <Skills />
    <Projects/>
    <Contact /></>
  )
}
