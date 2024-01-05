import { NextPage } from "next";
import React from "react";

interface Props {
  title: string;
}

const TitleText: NextPage<Props> = ({ title }) => {
  const titleWords = title.split(" ");

  if (titleWords.length === 1) {
    // Si solo hay una palabra, aplicar el formato directamente
    return <h3 className="font-bold text-emerald-50 text-sm">{title}</h3>;
  }

  return (
    <h3 className="font-bold text-emerald-50 text-sm">
      {titleWords.map((word, index) => (
        <React.Fragment key={index}>
          {index !== titleWords.length - 1 ? `${word} ` : <span className="underline" key={word+index}>{word}</span>}
        </React.Fragment>
      ))}
    </h3>
  );
};

export default TitleText;
