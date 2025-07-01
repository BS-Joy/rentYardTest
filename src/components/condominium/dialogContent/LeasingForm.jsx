import { useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Checkbox } from "../../ui/checkbox";
import { Button } from "../../ui/button";

const LeasingForm = () => {
  const [addressSameAsProperty, setAddressSameAsProperty] = useState(true);
  const [value, setValue] = useState();
  return (
    <div className="px-6 py-6">
      <div className="space-y-6 border-b pb-5">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="manager-name">
              Leasing manager name<span className="text-red-500">*</span>
            </Label>
            <Input
              id="manager-name"
              placeholder="Alex johan"
              className="h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="manager-phone">
              Leasing manager Phone number
              <span className="text-red-500">*</span>
            </Label>
            <div className="flex">
              <PhoneInput
                placeholder="Enter phone number"
                defaultCountry="BD"
                value={value}
                onChange={setValue}
                className="w-full py-2 px-4 rounded-xl border border-stock focus-within:border-ring"
              />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
          <div className="space-y-2">
            <Label htmlFor="manager-email">
              Leasing manager email<span className="text-red-500">*</span>
            </Label>
            <Input
              id="manager-email"
              placeholder="leasing@rentyeard.com"
              className="h-11"
            />
          </div>
          <div className="flex items-center space-x-2 pb-1">
            <Checkbox
              id="same-address"
              checked={addressSameAsProperty}
              onCheckedChange={setAddressSameAsProperty}
              className=""
            />
            <Label
              htmlFor="same-address"
              className="text-sm font-medium cursor-pointer"
            >
              Address(same as property)
            </Label>
          </div>
        </div>
      </div>

      {/* Add Button */}
      <div className="flex justify-end mt-5">
        <Button className="bg-primary hover:bg-primary/90 text-white text-base px-8 py-2 h-11 rounded-lg font-bold">
          Add
        </Button>
      </div>
    </div>
  );
};

export default LeasingForm;
