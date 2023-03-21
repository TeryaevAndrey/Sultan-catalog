import React, { FC } from "react";

interface ITitle {
  title: string;
}

const Title: FC<ITitle> = ({ title }) => {
  return (
    <h1 className="text-[40px] font-medium text-black-001 leading-[48px]">
      {title}
    </h1>
  );
};

export default Title;
