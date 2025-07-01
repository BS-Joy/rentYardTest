import React from "react";
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

const PetFeesForm = () => {
  return (
    <div className="px-6 py-6">
      <div className="space-y-6">
        {/* First Row - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="pet-type">
              Pet type<span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="h-11 py-5 w-full focus:border-blue-500 focus:ring-blue-500">
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
            <Label htmlFor="max-weight">
              Max weight(LB)<span className="text-red-500">*</span>
            </Label>
            <Input
              id="max-weight"
              placeholder="100"
              className="h-11 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Second Row - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="one-time-fee">
              One time pet fee<span className="text-red-500">*</span>
            </Label>
            <Input
              id="one-time-fee"
              placeholder="$100"
              className="h-11 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="security-deposit">
              Pet Security Deposit<span className="text-red-500">*</span>
            </Label>
            <Input
              id="security-deposit"
              placeholder="$100"
              className="h-11 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="monthly-rent">
              Monthly pet rent<span className="text-red-500">*</span>
            </Label>
            <Input
              id="monthly-rent"
              placeholder="$100"
              className="h-11 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Add Button */}
      <div className="flex justify-end mt-8">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 h-11 rounded-lg font-medium">
          Add
        </Button>
      </div>
    </div>
  );
};

export default PetFeesForm;
