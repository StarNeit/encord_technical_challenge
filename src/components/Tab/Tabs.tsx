import React from "react";
import { concatClassNames } from "src/utils/react";
import styles from "./tabs.module.css";

const Tabs = (props: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul {...props} className={concatClassNames(styles.tabs, props.className)}>
      {props.children}
    </ul>
  );
};

export default Tabs;
