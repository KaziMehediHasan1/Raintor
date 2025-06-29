import { IButton } from "@/types";

const Button = ({ icon, text, size }: IButton) => {
  return (
    <button className="flex items-center border-[1px] border-black dark:border-white rounded-4xl">
      {/* ICON */}
      <div
        className={`${
          size == "lg"
            ? "border-[1px] border-black dark:border-white rounded-full p-1.5"
            : size == "md"
            ? "border-[1px] border-black dark:border-white rounded-full p-1"
            : "border-[1px] border-black dark:border-white rounded-full p-0.5"
        }`}
      >
        {icon}
      </div>
      {/* TEXT */}
      <span
        className={`${
          size === "lg"
            ? "py-3 px-2"
            : size === "md"
            ? "py-2 px-2"
            : "py-2 px-1"
        }`}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
