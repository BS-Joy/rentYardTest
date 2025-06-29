import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import SelectPropertyPage from "./components/property/SelectPropertyPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SelectPropertyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
