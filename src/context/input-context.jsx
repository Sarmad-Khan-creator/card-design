import { createContext, useState } from "react";

export const InputContext = createContext({
  errorStatus: {
    name: false,
    month: false,
    year: false,
    cvc: false,
  },
  data: {},
  submitStatus: false,
  handleSubmission: () => {},
  handleContinue: () => {},
});

const InputContextProvider = ({ children }) => {
  const [errorStatus, setErrorStatus] = useState({
    name: false,
    month: false,
    year: false,
    cvc: false,
  });

  const [data, setData] = useState({});
  const [submitStatus, setSubmitStatus] = useState(false);

  const handleSubmission = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);

    const data = Object.fromEntries(fd.entries());
    setData(data);

    if (data.name.length < 1) {
      setErrorStatus((prevError) => {
        return {
          ...prevError,
          name: true,
        };
      });
    } else {
      setErrorStatus((prevError) => {
        return {
          ...prevError,
          name: false,
        };
      });
    }

    if (data.month.length < 1) {
      setErrorStatus((prevError) => {
        return {
          ...prevError,
          month: true,
        };
      });
    } else {
      setErrorStatus((prevError) => {
        return {
          ...prevError,
          month: false,
        };
      });
    }

    if (data.year.length < 1) {
      setErrorStatus((prevError) => {
        return {
          ...prevError,
          year: true,
        };
      });
    } else {
      setErrorStatus((prevError) => {
        return {
          ...prevError,
          year: false,
        };
      });
    }

    if (data.cvc.length < 1) {
      setErrorStatus((prevError) => {
        return {
          ...prevError,
          cvc: true,
        };
      });
    } else {
      setErrorStatus((prevError) => {
        return {
          ...prevError,
          cvc: false,
        };
      });
    }

    if (
      data.name.length < 1 ||
      data.month.length < 1 ||
      data.year.length < 1 ||
      data.cvc.length < 1
    ) {
      return;
    }

    setSubmitStatus(true);
  };

  const handleContinue = () => {
    setSubmitStatus(false);
    setData({})
  };

  const ctxValue = {
    errorStatus,
    data,
    submitStatus,
    handleSubmission,
    handleContinue,
  };

  return (
    <InputContext.Provider value={ctxValue}>{children}</InputContext.Provider>
  );
};

export default InputContextProvider;
