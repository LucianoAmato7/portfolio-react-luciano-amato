import { BrowserRouter } from "react-router-dom";
import Presentation from "./components/profile/Presentation";
import Description from "./components/profile/description/description";
import RatingStars from "./components/ratingStars/RatingStars";
import NavBar from "./components/navBar/navBar";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <BrowserRouter>
        <NavBar/>
        <Presentation />
        <Description />
        <RatingStars />
      </BrowserRouter>
    </div>
  );
}

export default App;
