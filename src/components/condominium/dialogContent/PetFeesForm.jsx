import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { useProperty } from "../../../hooks/UseProperty";

const PetFeesForm = ({ setOpen }) => {
  const { setPropertyData } = useProperty();
  const [form, setForm] = useState({
    petType: "",
    maxWeight: "",
    oneTimeFee: "",
    securityDeposit: "",
    monthlyRent: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelect = (value) => {
    setForm((prev) => ({ ...prev, petType: value }));
  };

  const handleAdd = () => {
    setPropertyData((prev) => ({ ...prev, petFees: { ...form } }));
    console.log("propertyData:", { petFees: { ...form } });
    if (setOpen) setOpen(false);
  };

  return (
    <div className="px-6 py-6">
      <div className="space-y-6 border-b pb-5">
        {/* First Row - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="pet-type">
              Pet type<span className="text-red-500">*</span>
            </Label>
            <Select onValueChange={handleSelect}>
              <SelectTrigger className="h-11 py-5 w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dog">Dog</SelectItem>
                <SelectItem value="cat">Cat</SelectItem>
                <SelectItem value="bird">Bird</SelectItem>
                <SelectItem value="fish">Fish</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="maxWeight">
              Max weight(LB)<span className="text-red-500">*</span>
            </Label>
            <Input
              id="maxWeight"
              placeholder="100"
              className="h-11"
              value={form.maxWeight}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Second Row - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="oneTimeFee">
              One time pet fee<span className="text-red-500">*</span>
            </Label>
            <Input
              id="oneTimeFee"
              placeholder="$100"
              className="h-11"
              value={form.oneTimeFee}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="securityDeposit">
              Pet Security Deposit<span className="text-red-500">*</span>
            </Label>
            <Input
              id="securityDeposit"
              placeholder="$100"
              className="h-11"
              value={form.securityDeposit}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="monthlyRent">
              Monthly pet rent<span className="text-red-500">*</span>
            </Label>
            <Input
              id="monthlyRent"
              placeholder="$100"
              className="h-11"
              value={form.monthlyRent}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Add Button */}
      <div className="flex justify-end mt-5">
        <Button
          className="bg-primary hover:bg-primary/90 text-white text-base px-8 py-2 h-11 rounded-lg font-bold"
          onClick={handleAdd}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default PetFeesForm;
