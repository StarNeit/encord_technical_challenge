import React from "react";

const Tab = (props: React.HTMLAttributes<HTMLLIElement>) => {
  return (
    <li className="mr-2" {...props}>
      <a
        href="#a"
        aria-current="page"
        className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active "
      >
        {props.children}
      </a>
    </li>
  );
};

export default Tab;
