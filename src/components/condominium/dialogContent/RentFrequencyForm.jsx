import { TbCalendarMonth } from "react-icons/tb";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Button } from "../../ui/button";

const RentFrequencyForm = () => {
  return (
    <div className="px-6 py-6">
      <div className="space-y-6 border-b pb-5">
        {/* Rent frequency row - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Rent payment frequency */}
          <div className="space-y-2">
            <Label htmlFor="payment-frequency">
              Rent payment frequency<span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="h-11 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 py-[21px]">
                <SelectValue placeholder="Monthly" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="annually">Annually</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Rent Reminder/Statement date */}
          <div className="space-y-2">
            <Label htmlFor="reminder-date">
              Rent Reminder/Statement date
              <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="reminder-date"
                placeholder="25th Every month"
                className="h-11 pr-10"
              />
              <TbCalendarMonth className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#141B34]" />
            </div>
          </div>

          {/* Rent due date */}
          <div className="space-y-2">
            <Label htmlFor="due-date">
              Rent due date<span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="due-date"
                placeholder="5th Every month"
                className="h-11 pr-10"
              />
              <TbCalendarMonth className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#141B34]" />
            </div>
          </div>
        </div>
      </div>

      {/* Add Button */}
      <div className="flex justify-end mt-5">
        <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-2 h-11 rounded-lg font-bold text-base">
          Add
        </Button>
      </div>
    </div>
  );
};

export default RentFrequencyForm;
