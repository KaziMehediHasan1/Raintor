import { IWorkedCard } from "@/types";
import Image from "next/image";

const WorkedCard = ({ image, text, style }: IWorkedCard) => {
  return (
    <div className="inline-flex items-center gap-0.5 border-[1px] border-black rounded-4xl p-3 md:px-6 md:py-4">
      {image && <Image src={image} alt={text} width={15} height={15} />}
      <p className={`${style} font-normal`}>{text}</p>
    </div>
  );
};

export default WorkedCard;
