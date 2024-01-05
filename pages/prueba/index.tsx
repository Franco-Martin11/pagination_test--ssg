import { NextPage } from "next";
import TitleText from "../../components/TitleText";
import CardComponent from "../../components/CardComponent";

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div className="bg-black w-screen h-screen">
      <CardComponent
        bgColor={"bg-lightBeige"}
        route={"/"}
        srcImage={"/img-bottom.png"}
        altImage={"img-izq"}
        titleText={"Birmingham Museums."}
        headTitle={"Congreve Street"}
      />{" "}

    </div>
  );
};

export default Index;
