import { useState } from "react";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";

const AboutPropertyForm = () => {
  const [propertyDescription, setPropertyDescription] = useState("");
  return (
    <div className="px-6 py-6">
      <div className="space-y-6 border-b pb-5">
        {/* Large textarea for property description */}
        <div>
          <Textarea
            placeholder="Type message here"
            value={propertyDescription}
            onChange={(e) => setPropertyDescription(e.target.value)}
            className="min-h-[200px] resize-none"
          />
        </div>
      </div>

      {/* Add Button */}
      <div className="flex justify-end mt-5">
        <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-2 h-11 text-base rounded-lg font-bold">
          Add
        </Button>
      </div>
    </div>
  );
};

export default AboutPropertyForm;
