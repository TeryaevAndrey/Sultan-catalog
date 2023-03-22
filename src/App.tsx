import react from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/:productId" element={<ProductPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
