
import './App.css';

//Components
import Project from './components/project'

//Pages
import Header from "./pages/Header"
import Banner from "./pages/Banner"
import Nav from "./pages/Nav"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>


    <Nav  />
    <Header />
    <Banner />
    <About />
    <Projects/>
    <Contact />
    


      {/* <div class="h-96 bg-gray-200 flex justify-center items-center dark:bg-black">
        <div className='bg-gray-100 w-32 h-32 rounded-full'></div>
        <div class="px-4">
          <p className='text-6xl font-bold dark:invert'>Hello! I'm Luis Manzo</p>
          <p className='text-3xl font-thing dark:invert'>Front-end and Back-end developer.</p>
        </div>
      </div> */}

      {/* <div className='flex justify-center'>
        <Project />
        <Project />
        <Project />
      </div> */}


  



       
    </ div>
  )
}

export default App