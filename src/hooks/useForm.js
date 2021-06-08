import { useState } from "react";
import * as Constants from "../constants";
const useForm = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const [errorValues, setErrorValues] = useState({
    nameError: "",
    emailError: "",
    messageError: "",
    error: true,
  });

  const handleNameChange = (event) => {
    event.preventDefault();
    const userName = event.target.value;
    setName(userName);
    var namePattern = /^[a-zA-Z]+/;
    if (userName === "" || userName === null) {
      // setNameError(Constants.INVALID_NAME);
      setErrorValues((errorValues) => ({
        ...errorValues,
        ["nameError"]: Constants.INVALID_NAME,
      }));

      setErrorValues((errorValues) => ({ ...errorValues, ["error"]: true }));
    } else if (!namePattern.test(userName)) {
      setErrorValues((errorValues) => ({
        ...errorValues,
        ["nameError"]: Constants.INVALID_NAME,
      }));

      setErrorValues((errorValues) => ({ ...errorValues, ["error"]: true }));
    } else {
      setErrorValues({ ...errorValues, ["nameError"]: "" });

      if (
        errorValues["nameError"] === "" &&
        errorValues["emailError"] === "" &&
        errorValues["messageError"] === "" &&
        email.length > 0 &&
        message.length > 0
      )
        setErrorValues((errorValues) => ({ ...errorValues, ["error"]: false }));
    }
  };
  const handleEmailChange = (event) => {
    event.preventDefault();
    const userEmail = event.target.value;
    setEmail(userEmail);

    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userEmail === "" || userEmail === null) {
      setErrorValues((errorValues) => ({
        ...errorValues,
        ["emailError"]: Constants.INVALID_EMAIL,
      }));
      setErrorValues((errorValues) => ({ ...errorValues, ["error"]: true }));
    } else if (!emailPattern.test(userEmail)) {
      setErrorValues((errorValues) => ({
        ...errorValues,
        ["emailError"]: Constants.INVALID_EMAIL,
      }));
      setErrorValues((errorValues) => ({ ...errorValues, ["error"]: true }));
    } else {
      setErrorValues((errorValues) => ({ ...errorValues, ["emailError"]: "" }));
      if (
        errorValues["nameError"] === "" &&
        errorValues["emailError"] === "" &&
        errorValues["messageError"] === "" &&
        name.length > 0 &&
        message.length > 0
      )
        setErrorValues((errorValues) => ({ ...errorValues, ["error"]: false }));
    }
  };
  const handleMessageChange = (event) => {
    event.preventDefault();
    const userMessage = event.target.value;
    setMessage(userMessage);
    if (userMessage === "" || userMessage === null) {
      //setMessageError(Constants.INVALID_MESSAGE);
      setErrorValues((errorValues) => ({
        ...errorValues,
        ["messageError"]: Constants.INVALID_MESSAGE,
      }));
      setErrorValues((errorValues) => ({ ...errorValues, ["error"]: true }));
    } else {
      setErrorValues((errorValues) => ({
        ...errorValues,
        ["messageError"]: "",
      }));
      if (
        errorValues["nameError"] === "" &&
        errorValues["emailError"] === "" &&
        errorValues["messageError"] === "" &&
        email.length > 0 &&
        name.length > 0
      ) {
        setErrorValues((errorValues) => ({ ...errorValues, ["error"]: false }));
      }
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
  };

  return {
    handleNameChange,
    handleEmailChange,
    handleMessageChange,
    handleClick,
    errorValues,
  };
};

export default useForm;
