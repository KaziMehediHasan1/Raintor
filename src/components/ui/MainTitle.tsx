import { IMainTitle } from "@/types";

const MainTitle = ({
  style,
  highlightedText,
  text,
  highlightedTextClass,
}: IMainTitle) => {
  const words = text.split(" ");

  return (
    <h1
      className={`${style} "text-2xl sm:text-3xl md:text-5xl font-semibold flex items-center flex-wrap gap-2"`}
    >
      {words.map((word: string, index) => {
        const Word = word.replace(/[.,]/, "");
        const seeBgColor = highlightedText.includes(Word);
        return (
          <span
            key={index}
            className={`${
              seeBgColor && highlightedTextClass
            } tracking-wider capitalize`}
          >
            {word}
          </span>
        );
      })}
    </h1>
  );
};

export default MainTitle;
