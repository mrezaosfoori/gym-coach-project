import React from "react";
import { cn } from "./../../lib/utils/index";

const Button = (props) => {
  const { children, icon, className, onClick, tabIndex } = props;

  return (
    <button
      tabIndex={tabIndex}
      onClick={onClick}
      className={cn(
        " py-2 px-5 text-[18px] font-semibold flex items-center  justify-center  gap-2 rounded-md",
        className
      )}
    >
      {" "}
     {icon && <img src={icon} alt="" className="w-4 h-4 " />}
      {children}
    </button>
  );
};

export default Button;
