import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { useProperty } from "../../../hooks/UseProperty";

const PropertyAddress = ({ setOpen }) => {
  const { propertyData, setPropertyData } = useProperty();

  // Local state for form fields, initialized from propertyData.address if available
  const [form, setForm] = useState(() => ({
    propertyName: propertyData?.address?.propertyName || "",
    apartmentUnits: propertyData?.address?.apartmentUnits || "",
    propertyWebsite: propertyData?.address?.propertyWebsite || "",
    country: propertyData?.address?.country || "",
    streetAddress: propertyData?.address?.streetAddress || "",
    aptSuite: propertyData?.address?.aptSuite || "",
    city: propertyData?.address?.city || "",
    state: propertyData?.address?.state || "",
    zipCode: propertyData?.address?.zipCode || "",
  }));

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelect = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleAdd = () => {
    setPropertyData((prev) => ({ ...prev, address: { ...form } }));
    console.log("propertyData:", { address: { ...form } });
    setOpen(false);
  };

  return (
    <div className="px-6 py-6 overflow-hidden">
      <div className="space-y-6 border-b pb-5">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="propertyName">
              Property name as identifier
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="propertyName"
              placeholder="Dallas apartments complex"
              className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              value={form.propertyName}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="apartmentUnits">
              Total apartment unit<span className="text-red-500">*</span>
            </Label>
            <Input
              id="apartmentUnits"
              placeholder="50"
              className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              value={form.apartmentUnits}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="propertyWebsite">
              Property website
              <span className="text-gray-500">(optional)</span>
            </Label>
            <Input
              id="propertyWebsite"
              placeholder="https://"
              className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              value={form.propertyWebsite}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="country">
              Country/Region<span className="text-red-500">*</span>
            </Label>
            <Select
              value={form.country}
              onValueChange={(v) => handleSelect("country", v)}
            >
              <SelectTrigger className="h-12 py-[21px] w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder="Choose country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="streetAddress">
              Street address<span className="text-red-500">*</span>
            </Label>
            <Input
              id="streetAddress"
              placeholder="111 Austin Ave"
              className="h-11 border-gray-300"
              value={form.streetAddress}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="aptSuite">
              Apt, suite, unit{" "}
              <span className="text-gray-500">(if applicable)</span>
            </Label>
            <Input
              id="aptSuite"
              placeholder="123"
              className="h-11 border-gray-300"
              value={form.aptSuite}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">
              City/Town<span className="text-red-500">*</span>
            </Label>
            <Input
              id="city"
              placeholder="Dallas"
              className="h-11 border-gray-300"
              value={form.city}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">
              State/Territory<span className="text-red-500">*</span>
            </Label>
            <Select
              value={form.state}
              onValueChange={(v) => handleSelect("state", v)}
            >
              <SelectTrigger className="h-12 py-[21px] w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder="Choose state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tx">Texas</SelectItem>
                <SelectItem value="ca">California</SelectItem>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="fl">Florida</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="zipCode">
              Zip code<span className="text-red-500">*</span>
            </Label>
            <Input
              id="zipCode"
              placeholder="75061"
              className="h-11"
              value={form.zipCode}
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

export default PropertyAddress;
