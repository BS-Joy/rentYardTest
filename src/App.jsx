import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import SelectPropertyPage from "./components/property/SelectPropertyPage";
import CondoInfoPage from "./components/condominium/CondoInfoPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SelectPropertyPage />} />
        <Route path="/condoinfo" element={<CondoInfoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
