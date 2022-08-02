import React, { InputHTMLAttributes } from "react";
import { concatClassNames } from "src/utils/react";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input {...props} className={concatClassNames("border", props.className)} />
  );
};

export default Input;
