import React from "react";

const InputError = ({ value, requiredText, maxLengthText }) => {
  if (value) {
    // console.log("inputerror component: ", value);
  }
  return (
    <>
      {value?.type === "required" && (
        <p className="text-sm text-red-500 ">{requiredText}</p>
      )}
      {value?.type === "maxLength" && (
        <p className="text-sm text-red-500 ">{maxLengthText}</p>
      )}
    </>
  );
};

export default InputError;
