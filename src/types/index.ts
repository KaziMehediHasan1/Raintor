import { ReactElement, ReactNode } from "react";
// WRAPPER TYPES
export interface IWrapper {
  children: ReactNode;
}

// UI BUTTON COMPONENT TYPES
export interface IButton {
  icon: ReactNode | ReactElement;
  text: string;
  size: "lg" | "md" | "sm";
}
