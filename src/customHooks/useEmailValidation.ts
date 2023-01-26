import React, { useState } from "react";

const useEmailValidation = () => {
  const [isValid, setIsValid] = useState(false);
  const regEmail =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;

  const checkIsValid = (value: string) => {
    if (regEmail.test(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return { isValid, checkIsValid };
};

export default useEmailValidation;
