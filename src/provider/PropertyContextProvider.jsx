import { useState } from "react";
import { PropertyContext } from "../context/PropertyContext";

export const PropertyProvider = ({ children }) => {
  const [propertyData, setPropertyData] = useState({});

  return (
    <PropertyContext.Provider value={{ propertyData, setPropertyData }}>
      {children}
    </PropertyContext.Provider>
  );
};
