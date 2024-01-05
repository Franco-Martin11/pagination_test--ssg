import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import TitleText from "./TitleText";
import HeadTitle from "./HeadTitle";

interface Props {
  bgColor: string;
  flex?: string;
  route: string;
  srcImage: string;
  altImage: string;
  titleText: string;
  headTitle: string;
}

const CardComponent: NextPage<Props> = ({
  bgColor,
  flex,
  srcImage,
  altImage,
  route,
  headTitle,
  titleText,
}) => {
  return (
    <div
      className={`rounded-lg ${bgColor}  gap-4 flex ${
        flex ? flex : "flex-col"
      }  max-w-[350px] h-screen justify-between`}
    >
      <div className="p-4 pb-0 flex flex-col content-start">
        <HeadTitle headTitle={headTitle} />
        <TitleText title={titleText} />
      </div>
      <div className="rounded-xl px-4 max-w-full h-fit flex">
        <Image src={srcImage} alt={altImage} width={350} height={500} />
      </div>
      <Link href={route}>
        <div className="flex p-4 gap-2 justify-between text-lg items-center text-gray-800 border-t-black border-t">
          <h5>GET STARTED</h5>
          <span>→</span>
        </div>
      </Link>
    </div>
  );
};

export default CardComponent;
