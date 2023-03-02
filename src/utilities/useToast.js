import { useState } from "react";
import { Toast } from "react-bootstrap";

const useToast = (delay) => {
  const [showToast, setShowToast] = useState(false);
  const toggleToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, delay);
  };

  return [showToast, setShowToast, toggleToast];
};

export default useToast;
