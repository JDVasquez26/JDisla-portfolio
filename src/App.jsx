import { useContext } from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from './components/work/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contact from "./components/contact/Contact"
import './app.scss'
import { useState } from "react";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import { ThemeContext } from "./context";
import Toggle from "./components/toggle/Toggle";

function App() {
  //to pass menuOpen as a prop through topbar
  const [menuOpen, setMenuOpen] = useState(false)

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="app"
    style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",  
    }}
    >
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <Toggle menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <div className="sections"
    //  style={{
    //   backgroundColor: darkMode ? "#222" : "white",
    //   color: darkMode && "white",  
    // }}
     >
        <Intro/>
        <About/>
        <Portfolio/>
        {/* <Works/> */}
        {/* <Testimonials/> */}
        <Contact/>
     </div>
    </div>
  );
}

export default App;
