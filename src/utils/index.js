import homeIcon from "../assets/icons/home-09.svg";
import houseIcon from "../assets/icons/house-01.svg";
import condominiumIcon from "../assets/icons/building-06.svg";
import keyIcon from "../assets/icons/key-02.svg";
import realtorIcon from "../assets/icons/manager.svg";
import companyIcon from "../assets/icons/permanent-job.svg";

export const propertyTypes = [
  {
    id: "single-house",
    title: "Single House Property",
    description: "Single unit house for single family",
    icon: homeIcon,
  },
  {
    id: "apartments",
    title: "Apartments complex",
    description: "Multiple unit house for families",
    icon: houseIcon,
  },
  {
    id: "condominiums",
    title: "Condominiums",
    description: "Multiple unit house for families",
    icon: condominiumIcon,
  },
];

export const roles = [
  {
    id: "landlord",
    title: "Landlord",
    description: "Owner of the property",
    icon: keyIcon,
  },
  {
    id: "realtor",
    title: "Realtor",
    description: "Manage property on behalf on owner",
    icon: realtorIcon,
  },
  {
    id: "property-management",
    title: "Property management company",
    description: "For management company",
    icon: companyIcon,
  },
];
