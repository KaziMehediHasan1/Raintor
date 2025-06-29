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

// MAIN-TITLE TYPES
export interface IMainTitle {
  style?: string;
  highlightedText: string[];
  text: string;
  highlightedTextClass?: string;
}

// ISecondaryButton types
export interface ISecondaryButton {
  text: string;
  style?: string;
  size: "lg" | "md" | "sm";
}

// IWorkedCard types
export interface IWorkedCard {
  image?: string;
  text: string;
  style?: string;
}
