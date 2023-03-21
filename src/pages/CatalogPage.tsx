import React, { FC } from "react";
import Tabs from "../components/Catalog/Tabs/Tabs";
import Crumbs from "../components/Crumbs";

const CatalogPage: FC = () => {
  return (
    <section>
      <Tabs />
      <div className="container">
        <Crumbs way={[{ title: "Косметика и гигиена", to: "/" }]} />
      </div>
    </section>
  );
};

export default CatalogPage;
