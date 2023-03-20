import react from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CatalogPage from "./pages/CatalogPage";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<CatalogPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
