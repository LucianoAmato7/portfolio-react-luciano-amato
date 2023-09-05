import { BrowserRouter } from "react-router-dom";
import Presentation from "./components/profile/Presentation";
import Description from "./components/profile/description/description";
import RatingStars from "./components/ratingStars/RatingStars";

function App() {
  return (
    <>
      <BrowserRouter>
        <Presentation />
        <Description />
        <RatingStars />
      </BrowserRouter>
    </>
  );
}

export default App;
