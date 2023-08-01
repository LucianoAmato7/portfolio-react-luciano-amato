import { BrowserRouter } from "react-router-dom";
import Presentation from "./components/profile/Presentation";
import Description from "./components/profile/description/description";

function App() {
  return (
    <>
      <BrowserRouter>
        <Presentation />
        <Description />
      </BrowserRouter>
    </>
  );
}

export default App;
