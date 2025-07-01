import React from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Button } from "../../ui/button";
import { Info } from "lucide-react";

const ChargesForm = () => {
  return (
    <div className="px-6 py-6">
      <div className="space-y-6 border-b pb-5">
        {/* Application and Admin fees row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Application fee with combined input and dropdown */}
          <div className="space-y-2">
            <Label htmlFor="application-fee">
              Application fee(one-time)<span className="text-red-500">*</span>
            </Label>
            <div className="flex">
              <Input
                id="application-fee"
                placeholder="100"
                className="h-11 border-r-0 rounded-r-none flex-1"
              />
              <Select defaultValue="all-18">
                <SelectTrigger className="w-48 h-11 py-[21px] rounded-l-none ">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-18">All 18+ applicant</SelectItem>
                  <SelectItem value="per-applicant">Per applicant</SelectItem>
                  <SelectItem value="primary-only">
                    Primary applicant only
                  </SelectItem>
                  <SelectItem value="per-unit">Per unit</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Admin fee */}
          <div className="space-y-2">
            <Label htmlFor="admin-fee">
              Admin fee(one-time)<span className="text-red-500">*</span>
            </Label>
            <Input id="admin-fee" placeholder="15" className="h-11" />
          </div>
        </div>
      </div>

      {/* Add Button */}
      <div className="flex justify-between items-center mt-5">
        {/* Info message */}
        <div className="flex items-center gap-2 text-base font-semibold">
          <Info className="h-4 w-4" />
          <span>Type 0 if charges not applicable</span>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white text-base px-8 py-2 h-11 rounded-lg font-bold">
          Add
        </Button>
      </div>
    </div>
  );
};

export default ChargesForm;
