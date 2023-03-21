import React, { FC } from "react";
import Parameters from "../components/Catalog/Parameters/Parameters";
import Tabs from "../components/Catalog/Tabs/Tabs";
import Crumbs from "../components/Crumbs";
import Title from "../components/Title";

const CatalogPage: FC = () => {
  return (
    <section>
      <Tabs />
      <div className="container">
        <Crumbs way={[{ title: "Косметика и гигиена", to: "/" }]} />
        <div className="mt-6 lg:mt-0">
          <Title title="Косметика и гигиена" />
          <Parameters />
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;
