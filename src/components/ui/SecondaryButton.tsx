import { ISecondaryButton } from "@/types";
import { MoveDown } from "lucide-react";
const SecondaryButton = ({ text, style, size }: ISecondaryButton) => {
  return (
    <button className={`${style} flex items-center`}>
      <MoveDown
        className={`${
          size == "lg"
            ? " w-9 h-9 p-1.5 rounded-full"
            : size == "md"
            ? "w-8 h-8 rounded-full p-1"
            : size == "sm" && "w-6 sm:h-6 rounded-full"
        } "rounded-full border-[1px] border-black `}
      />
      <p
        className={`${
          size == "lg"
            ? "border-[1px] border-black dark:border-white rounded-4xl p-1.5"
            : size == "md"
            ? "border-[1px] border-black dark:border-white rounded-4xl p-1"
            : size == "sm" &&
              "border-[1px] border-black dark:border-white rounded-4xl p-0.5"
        }`}
      >
        {text}
      </p>
    </button>
  );
};

export default SecondaryButton;
