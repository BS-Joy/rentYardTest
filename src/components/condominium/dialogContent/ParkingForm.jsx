import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";

const ParkingForm = () => {
  const [overviewText, setOverviewText] = useState("");
  const maxLength = 200;
  return (
    <div className="px-6 py-6">
      <div className="space-y-6">
        {/* Guest vehicle parking time */}
        <div className="border rounded-lg p-2 pl-4 w-fit">
          <div className="flex items-center gap-8 justify-between">
            <span className="text-base font-semibold">
              Guest vehicle parking time
            </span>
            <Select defaultValue="2h">
              <SelectTrigger className="w-auto shadow-none py-[6px] px-[10px] h-auto focus:ring-0 gap-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1h">1H</SelectItem>
                <SelectItem value="2h">2H</SelectItem>
                <SelectItem value="3h">3H</SelectItem>
                <SelectItem value="4h">4H</SelectItem>
                <SelectItem value="6h">6H</SelectItem>
                <SelectItem value="12h">12H</SelectItem>
                <SelectItem value="24h">24H</SelectItem>
                <SelectItem value="unlimited">Unlimited</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Parking overview textarea */}
        <div className="space-y-2">
          {/* <Label
            htmlFor="parking-overview"
            className="text-sm font-medium text-gray-700"
          >
            Write parking overview
          </Label> */}
          <div className="relative">
            <Textarea
              id="parking-overview"
              placeholder="Write parking overview"
              value={overviewText}
              onChange={(e) => setOverviewText(e.target.value)}
              maxLength={maxLength}
              className="min-h-[200px] focus:border-blue-500 focus:ring-blue-500 pr-16"
            />
            <div className="absolute bottom-3 right-3 text-sm text-gray-400">
              {maxLength - overviewText.length}
            </div>
          </div>
        </div>
      </div>

      {/* Add Button */}
      <div className="flex justify-end mt-8">
        <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-2 h-11 rounded-lg font-medium">
          Add
        </Button>
      </div>
    </div>
  );
};

export default ParkingForm;
