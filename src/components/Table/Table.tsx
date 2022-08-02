import React from "react";
import { concatClassNames } from "src/utils/react";
import styles from "./table.module.css";

const Table = (props: React.HTMLAttributes<HTMLTableElement>) => {
  return (
    <table
      {...props}
      className={concatClassNames(styles.table, props.className)}
    />
  );
};

export default Table;
