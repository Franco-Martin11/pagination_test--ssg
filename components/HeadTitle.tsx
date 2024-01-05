import { NextPage } from "next";

interface Props {
  headTitle: string;
}

const HeadTitle: NextPage<Props> = ({ headTitle }) => {
  return (
    <div className="rounded-full h-fit w-fit px-[2px] border-black border-[.2px] text-black text-md">
      <span>{headTitle}</span>
    </div>
  );
};

export default HeadTitle;
