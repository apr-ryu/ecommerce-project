"use client";

import React, { MouseEvent } from "react";

//STYLE
import "./button.scss";

export default function Button({
  children,
  handle,
  color,
}: {
  children: string;
  handle: (e?: React.MouseEvent<HTMLElement>) => void;
  color: "dark" | "light";
}) {
  return (
    <div className="button-wrapper">
      <p className={`button ${color}`} onClick={handle}>
        {children}
      </p>
    </div>
  );
}
