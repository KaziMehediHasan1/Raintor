import { IWrapper } from "@/types";

const Wrapper = ({ children }: IWrapper) => {
  return <div className="max-w-[1440px] w-full p-2 mx-auto">{children}</div>;
};

export default Wrapper;
