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

const LandMarkForm = () => {
  return (
    <div className="px-6 py-6">
      <div className="space-y-6 border-b pb-5">
        {/* First Row - Landmark type and Distance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Landmark type */}
          <div className="space-y-2">
            <Label htmlFor="landmark-type">
              Landmark type<span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="h-11 w-full py-[21px]">
                <SelectValue placeholder="Museum" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="museum">Museum</SelectItem>
                <SelectItem value="park">Park</SelectItem>
                <SelectItem value="hospital">Hospital</SelectItem>
                <SelectItem value="shopping-center">Shopping Center</SelectItem>
                <SelectItem value="restaurant">Restaurant</SelectItem>
                <SelectItem value="bank">Bank</SelectItem>
                <SelectItem value="library">Library</SelectItem>
                <SelectItem value="church">Church</SelectItem>
                <SelectItem value="gym">Gym</SelectItem>
                <SelectItem value="theater">Theater</SelectItem>
                <SelectItem value="monument">Monument</SelectItem>
                <SelectItem value="other">Other</SelectItem>
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

        {/* Landmark name */}
        <div className="space-y-2">
          <Label htmlFor="landmark-name">
            Landmark name<span className="text-red-500">*</span>
          </Label>
          <Input id="landmark-name" placeholder="Enter name" className="h-11" />
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

export default LandMarkForm;
