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

const PropertyAddress = ({ setOpen }) => {
  return (
    <div className="px-6 py-6 overflow-hidden">
      <div className="space-y-6">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="property-name">
              Property name as identifier
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="property-name"
              placeholder="Dallas apartments complex"
              className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="apartment-units">
              Total apartment unit<span className="text-red-500">*</span>
            </Label>
            <Input
              id="apartment-units"
              placeholder="50"
              className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="property-website">
              Property website
              <span className="text-gray-500">(optional)</span>
            </Label>
            <Input
              id="property-website"
              placeholder="https://"
              className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="country">
              Country/Region<span className="text-red-500">*</span>
            </Label>
            <Select>
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
            <Label htmlFor="street-address">
              Street address<span className="text-red-500">*</span>
            </Label>
            <Input
              id="street-address"
              placeholder="111 Austin Ave"
              className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="apt-suite">
              Apt, suite, unit{" "}
              <span className="text-gray-500">(if applicable)</span>
            </Label>
            <Input
              id="apt-suite"
              placeholder="123"
              className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor>
              City/Town<span className="text-red-500">*</span>
            </Label>
            <Input
              id="city"
              placeholder="Dallas"
              className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">
              State/Territory<span className="text-red-500">*</span>
            </Label>
            <Select>
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
            <Label htmlFor="zip-code">
              Zip code<span className="text-red-500">*</span>
            </Label>
            <Input
              id="zip-code"
              placeholder="75061"
              className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Add Button */}
      <div className="flex justify-end mt-8">
        <Button
          className="bg-primary hover:bg-primary/90 text-white px-8 py-2 h-11 rounded-lg font-medium"
          onClick={() => setOpen(false)}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default PropertyAddress;
