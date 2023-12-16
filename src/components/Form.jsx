import { useContext } from "react";
import { InputContext } from "../context/input-context";

const Form = () => {
  // const x = window.matchMedia("(max-width: 400px)");
  const { errorStatus, handleSubmission } = useContext(InputContext);

  const handleInputChange = (e) => {
    var val = e.target.value;
    var newval = "";
    val = val.replace(/\s/g, "");
    for (var i = 0; i < val.length; i++) {
      if (i % 4 === 0 && i > 0) newval = newval.concat(" ");
      newval = newval.concat(val[i]);
    }
    e.target.value = newval;
  };
  return (
    <form className="w-[400px] max-sm:w-[350px]" onSubmit={handleSubmission}>
      <label htmlFor="name" className="block font-semibold mb-1 tracking-wider max-sm:text-sm">
        CARDHOLDER NAME
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="e.g. Jane Applesedd"
        className="mb-4 w-full h-11 border-gray-600 border rounded-sm px-3 outline-gray-600"
      />
      {errorStatus.name === true && (
        <p className="text-red-500 text-[10px] mt-[-12px]">
          can&apos;t be blank
        </p>
      )}
      <label
        htmlFor="number"
        className="block font-semibold tracking-wider mb-1 max-sm:text-sm"
      >
        CARD NUMBER
      </label>
      <input
        type="text"
        id="number"
        name="number"
        placeholder="e.g. 1234 5678 9123 0000"
        maxLength={19}
        onKeyUp={handleInputChange}
        className="mb-4 w-full h-11 border-gray-600 border rounded-sm px-3 outline-gray-600"
      />

      <div className="flex w-full justify-between max-sm:gap-5">
        <div>
          <label
            htmlFor="date"
            className="block font-semibold mb-1 tracking-wider max-sm:text-sm"
          >
            EXP. DATE (MM/YY)
          </label>
          <div className="flex items-start">
            <div className="w-20 inline-block mr-5 max-sm:w-16">
              <input
                type="number"
                id="date"
                name="month"
                placeholder="MM"
                className="w-full h-11 border-gray-600 border rounded-sm px-3 outline-gray-600"
              />
              {errorStatus.month === true && (
                <p className="text-red-500 text-[10px]">can&apos;t be blank</p>
              )}
            </div>

            <div className="w-20 inline-block max-sm:w-16">
              <input
                type="number"
                name="year"
                placeholder="YY"
                className="w-full h-11 border-gray-600 border rounded-sm px-3 outline-gray-600"
              />
              {errorStatus.year === true && (
                <p className="text-red-500 text-[10px]">can&apos;t be blank</p>
              )}
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="cvc"
            className="block font-semibold mb-1 tracking-wider max-sm:text-sm"
          >
            CVC
          </label>
          <div>
            <input
              type="number"
              id="cvc"
              name="cvc"
              placeholder="123"
              className="w-full h-11 border-gray-600 border rounded-sm px-3 outline-gray-600"
            />
            {errorStatus.cvc === true && (
              <p className="text-red-500 text-[10px]">Can&apos;t be blank</p>
            )}
          </div>
        </div>
      </div>

      <button className="mt-5 w-full text-center backgroundColor rounded-sm py-3 text-white">
        Confirm
      </button>
    </form>
  );
};

export default Form;
