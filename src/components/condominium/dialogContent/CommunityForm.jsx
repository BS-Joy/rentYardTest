import { useState } from "react";
import { Button } from "../../ui/button";
import { Search } from "lucide-react";
import { Input } from "../../ui/input";
import { amenities } from "../../../utils/amenitylists";

const CommunityForm = () => {
  const [selectedAmenities, setSelectedAmenities] = useState([
    "air-conditioning",
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAmenities = amenities.filter((amenity) =>
    amenity.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAmenity = (amenityId) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenityId)
        ? prev.filter((id) => id !== amenityId)
        : [...prev, amenityId]
    );
  };
  return (
    <div className="px-6 py-6">
      <div className="space-y-6 border-b pb-5">
        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search amenities"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-11 pl-10 rounded-full"
          />
        </div>

        {/* Amenities grid with exactly max 3 columns and dense flow */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          //   style={{ gridAutoFlow: "dense" }}
        >
          {filteredAmenities.map((amenity) => {
            const IconComponent = amenity.icon;
            const isSelected = selectedAmenities.includes(amenity.id);

            return (
              <button
                key={amenity.id}
                onClick={() => toggleAmenity(amenity.id)}
                className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-colors cursor-pointer ${
                  isSelected
                    ? "border-primary bg-blue-50"
                    : "border-stock border bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                <IconComponent className="h-5 w-5 flex-shrink-0" />
                <span className="text-base font-semibold">{amenity.label}</span>
              </button>
            );
          })}
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

export default CommunityForm;
