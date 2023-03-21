import React, { FC } from "react";

interface ITitle {
  title: string;
}

const Title: FC<ITitle> = ({ title }) => {
  return (
    <h1 className="text-xl lg:text-[40px] font-medium text-black-001 lg:leading-[48px] uppercase">
      {title}
    </h1>
  );
};

export default Title;
