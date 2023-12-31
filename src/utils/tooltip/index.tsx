import React, { useState } from "react";
import "./styles.css";

export const Tooltip = (props: any) => {
  let timeout: number;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 300);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return(
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && (
        <div className={`Tooltip-Tip ${props.direction || "top"}`}>
          {props.content}
        </div>
      )}
    </div>

  )
};
