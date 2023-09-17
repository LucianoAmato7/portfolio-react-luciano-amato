import { BrowserRouter } from "react-router-dom";
import Presentation from "./components/profile/Presentation";
import Description from "./components/profile/description/description";
import RatingStars from "./components/ratingStars/RatingStars";
import NavBar from "./components/navBar/navBar";
import ProyectContainer from "./components/proyects/ProyectContainer";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <BrowserRouter>
        <NavBar/>
        <Presentation/>
        <Description/>
        <ProyectContainer/>
        <RatingStars/>
      </BrowserRouter>
    </div>
  );
}

export default App;
