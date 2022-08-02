import React, { TextareaHTMLAttributes } from "react";
import { concatClassNames } from "src/utils/react";

const TextArea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      {...props}
      className={concatClassNames("border", props.className)}
    ></textarea>
  );
};

export default TextArea;
