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

const UtilityProviderForm = () => {
  return (
    <div className="px-6 py-6">
      <div className="space-y-6 border-b pb-5">
        {/* Utility type and Provider company name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Utility type */}
          <div className="space-y-2">
            <Label htmlFor="utility-type">
              Utility type<span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="h-11 w-full py-[21px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="electricity">Electricity</SelectItem>
                <SelectItem value="gas">Gas</SelectItem>
                <SelectItem value="water">Water</SelectItem>
                <SelectItem value="internet">Internet</SelectItem>
                <SelectItem value="cable-tv">Cable TV</SelectItem>
                <SelectItem value="trash">Trash/Waste Management</SelectItem>
                <SelectItem value="sewer">Sewer</SelectItem>
                <SelectItem value="heating">Heating</SelectItem>
                <SelectItem value="cooling">Cooling/AC</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Provider company name */}
          <div className="space-y-2">
            <Label htmlFor="provider-name">
              Provider company name<span className="text-red-500">*</span>
            </Label>
            <Input
              id="provider-name"
              placeholder="Enter name"
              className="h-11"
            />
          </div>
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

export default UtilityProviderForm;
