import { useContext } from "react";
import { InputContext } from "../context/input-context";
import iconComplete from "../assets/images/icon-complete.svg";

const Thankyou = () => {
  const { handleContinue } = useContext(InputContext);
  return (
    <div className="flex flex-col w-[400px] gap-3 items-center justify-center max-sm:w-[350px]">
      <img src={iconComplete} alt="Completed" />
      <h1 className="text-2xl font-semibold headingTextColor">Thank you!</h1>
      <p className="text-lg paragraphTextColor">
        We&apos;ve added your card details
      </p>
      <button
        onClick={handleContinue}
        className="mt-5 w-full text-center backgroundColor rounded-sm py-3 text-white"
      >
        Continue
      </button>
    </div>
  );
};

export default Thankyou;
