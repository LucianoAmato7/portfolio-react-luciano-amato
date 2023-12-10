import { BrowserRouter } from "react-router-dom";
import Presentation from "./components/profile/Presentation";
import Description from "./components/profile/description/Description";
import ProyectContainer from "./components/proyects/ProyectContainer";
import Technologies from "./components/profile/description/technologies/Technologies"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import BtnScrollToTop from "./components/buttonScrollToTop/BtnScrollToTop";

function App() {

  useEffect(() => {
      AOS.init();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <BrowserRouter>
        <Presentation/>
        <Description/>
        <Technologies/>
        <ProyectContainer/>
        <BtnScrollToTop/>
      </BrowserRouter>
    </div>
  );
}

export default App;
