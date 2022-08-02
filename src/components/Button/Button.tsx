import React from "react";
import { concatClassNames } from "src/utils/react";
import styles from "./button.module.css";

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={concatClassNames(styles.button, props.className)}
    >
      {props.children}
    </button>
  );
};

export default Button;
