"use client";

import React, { Children } from "react";
import { useAppContext } from "./AppContext";

export default function AppWraper({ children }) {
  const { theme } = useAppContext();
  return (
    <div
      className={`p-4 gap-8 flex flex-col ${
        theme === "light" ? "bg-slate-200" : "bg-slate-500"
      }`}
    >
      {children}
    </div>
  );
}
