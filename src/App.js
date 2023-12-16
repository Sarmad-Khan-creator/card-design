import bgMobile from "../src/assets/images/bg-main-mobile.png";
import bgDesktop from "../src/assets/images/bg-main-desktop.png";
import Form from "./components/Form";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import Thankyou from "./components/Thankyou";
import { useContext } from "react";
import { InputContext } from "./context/input-context";

function App() {
  const { submitStatus } = useContext(InputContext);
  const x = window.matchMedia("(max-width: 400px)");
  return (
    <>
      <div className="flex items-center gap-96 max-sm:flex-col max-sm:gap-[100px]">
        <img
          src={x.matches ? bgMobile : bgDesktop}
          alt="background"
          className="sm:max-h-screen max-sm:w-full"
        />
        {submitStatus === false ? <Form /> : <Thankyou />}
      </div>
      <CardFront />
      <CardBack />
    </>
  );
}

export default App;
