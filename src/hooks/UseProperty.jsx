import { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

export const useProperty = () => useContext(PropertyContext);
