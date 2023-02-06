import { useState } from "react";

const useModal = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const toggleIsDisplayed = () => {
    setIsDisplayed(!isDisplayed);
  };
  return [isDisplayed, toggleIsDisplayed];
};
export default useModal;
