import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import SelectPropertyPage from "./components/property/SelectPropertyPage";
import CondoInfoPage from "./components/condominium/CondoInfoPage";
import PricingPage from "./components/pricing/PricingPage";
import { PropertyProvider } from "./provider/PropertyContextProvider";

function App() {
  return (
    <PropertyProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<SelectPropertyPage />} />
          <Route path="/condoinfo" element={<CondoInfoPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Route>
      </Routes>
    </PropertyProvider>
  );
}

export default App;
