import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";
import { propertyTypes, roles } from "../../utils";

import { Input } from "../../components/ui/input";

import PropertyRealtorForm from "./RealtorForm";
import LandlordForm from "./LandlordForm";
import CompanyForm from "./CompanyForm";

export default function SelectPropertyPage() {
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div className="bg-white py-10">
      {/* Property Type Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Property type</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {propertyTypes.map((type) => {
            const IconComponent = type.icon;
            const isSelected = selectedPropertyType === type.id;
            return (
              <Button
                key={type.id}
                variant="outline"
                onClick={() => setSelectedPropertyType(type.id)}
                className={`h-auto p-6 justify-start text-left border-gray-200 hover:bg-gray-100 rounded-xl ${
                  isSelected ? " border-primary bg-card-bg" : "hover:bg-card-bg"
                }`}
              >
                <div className="flex items-center space-x-4 w-full">
                  <img src={type.icon} alt={`${type.icon}`} />
                  <div className="flex-1 text-left">
                    <h3 className={`font-semibold text-base mb-1 `}>
                      {type.title}
                    </h3>
                    <p
                      className={`text-sm font-medium text-text-black-300 leading-relaxed `}
                    >
                      {type.description}
                    </p>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Role Selection Section */}
      <div>
        <h2 className="text-xl font-medium text-gray-800 mb-6">
          Select your role
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roles.map((role) => {
            const IconComponent = role.icon;
            const isSelected = selectedRole === role.id;
            return (
              <Button
                key={role.id}
                variant="outline"
                onClick={() => setSelectedRole(role.id)}
                className={`h-auto p-6 justify-start text-left border-gray-200 hover:bg-gray-100 ${
                  isSelected ? "bg-card-bg border-primary" : "hover:bg-card-bg"
                }`}
              >
                <div className="flex items-center space-x-4 w-full">
                  <img src={role.icon} alt={`${role.icon}`} />
                  <div className="flex-1 text-left">
                    <h3 className={`font-semibold text-base mb-1 `}>
                      {role.title}
                    </h3>
                    <p
                      className={`text-sm font-medium text-text-black-300 leading-relaxed `}
                    >
                      {role.description}
                    </p>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </div>

      {/* on landlord select */}
      {selectedRole === "landlord" && <LandlordForm />}

      {/* on realtor select */}
      {selectedRole === "realtor" && <PropertyRealtorForm />}

      {/* on company select */}
      {selectedRole === "property-management" && <CompanyForm />}
    </div>
  );
}
