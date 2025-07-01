import { useRef, useState } from "react";
import { Label } from "../../ui/label";
import uploadIcon from "../../../assets/icons/upload-02.svg";
import { Checkbox } from "../../ui/checkbox";
import { Button } from "../../ui/button";

const ApplicationAgreementForm = () => {
  const [acceptImmigrant, setAcceptImmigrant] = useState(false);
  const fileInputRef = useRef(null);

  const handlePdfUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      console.log("PDF file selected:", file.name);
      // Handle the PDF file upload here
    } else {
      alert("Please select a PDF file only");
    }
  };

  return (
    <div className="px-6 py-6">
      <div className="space-y-6 border-b pb-5">
        {/* Upload agreement section */}
        <div className="space-y-2">
          <Label>Upload agreement</Label>
          <div
            className="bg-[#f6f6f6] rounded-xl cursor-pointer"
            onClick={handlePdfUpload}
          >
            <div className="h-12 flex items-center justify-center gap-2.5 px-4 py-0 rounded-xl border border-dashed border-stock">
              <div className="flex items-center gap-2.5">
                <img className="w-6 h-6" alt="uploadIcon" src={uploadIcon} />
                <span className="font-semibold text-gray-text text-sm">
                  (Pdf only)
                </span>
              </div>
            </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Checkbox for immigrant & international student application */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="accept-immigrant"
            checked={acceptImmigrant}
            onCheckedChange={setAcceptImmigrant}
          />
          <Label htmlFor="accept-immigrant" className="cursor-pointer">
            Accept immigrant & international student application
          </Label>
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

export default ApplicationAgreementForm;
