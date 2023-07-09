import { BrowserRouter } from "react-router-dom";
import Presentation from "./components/profile/Presentation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Presentation />
      </BrowserRouter>
    </>
  );
}

export default App;
