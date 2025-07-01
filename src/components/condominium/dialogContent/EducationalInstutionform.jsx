import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

const EducationalInstutionform = () => {
  return (
    <div className="px-6 py-6">
      <div className="space-y-6 border-b pb-5">
        {/* First Row - Institution type and Distance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Educational institution type */}
          <div className="space-y-2">
            <Label htmlFor="institution-type">
              Educational institution type
              <span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="h-11 w-full py-[21px]">
                <SelectValue placeholder="High school" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="elementary">Elementary School</SelectItem>
                <SelectItem value="middle">Middle School</SelectItem>
                <SelectItem value="high">High School</SelectItem>
                <SelectItem value="college">College</SelectItem>
                <SelectItem value="university">University</SelectItem>
                <SelectItem value="vocational">Vocational School</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Distance from property */}
          <div className="space-y-2">
            <Label htmlFor="distance">
              Distance from property<span className="text-red-500">*</span>
            </Label>
            <div className="flex">
              <Input
                id="distance"
                placeholder="1.5"
                className="h-11 rounded-r-none"
              />
              <Select defaultValue="mile">
                <SelectTrigger className="w-32 h-11 py-[21px] rounded-l-none border-l-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mile">Mile</SelectItem>
                  <SelectItem value="km">Km</SelectItem>
                  <SelectItem value="block">Block</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Educational institution name */}
        <div className="space-y-2">
          <Label htmlFor="institution-name">
            Educational institution name<span className="text-red-500">*</span>
          </Label>
          <Input
            id="institution-name"
            placeholder="Enter name"
            className="h-11"
          />
        </div>
      </div>

      {/* Add Button */}
      <div className="flex justify-end mt-5">
        <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-2 h-11 rounded-lg text-base font-bold">
          Add
        </Button>
      </div>
    </div>
  );
};

export default EducationalInstutionform;
