import react from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import CatalogPage from "./pages/CatalogPage";
import EditPage from "./pages/EditPage";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/edit/:productId" element={<EditPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
