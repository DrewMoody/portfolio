import React, { useState } from "react";

const useContactForm = (cb: () => any) => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (e: any) => {
    if (e) {
      e.preventDefault();
    }
    cb();
  };

  const handleInputChange = (e: any) => {
    e.persist();

    setInputs(inputVals => ({
      ...inputVals,
      [e.target.name]: e.target.value
    }));
  };

  return {
    handleInputChange,
    handleSubmit,
    inputs
  };
};
export default useContactForm;
