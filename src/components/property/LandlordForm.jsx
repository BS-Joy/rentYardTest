import { useState, useRef } from "react";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import uploadIcon from "../../assets/icons/upload-02.svg";

const LandlordForm = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [ownershipFile, setOwnershipFile] = useState(null);
  const ownershipInputRef = useRef(null);

  const handleOwnershipClick = () => {
    ownershipInputRef.current && ownershipInputRef.current.click();
  };

  const handleOwnershipChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setOwnershipFile(file);
    }
  };

  const handleOwnershipRemove = (e) => {
    e.stopPropagation();
    setOwnershipFile(null);
    if (ownershipInputRef.current) ownershipInputRef.current.value = "";
  };

  return (
    <section className="flex flex-col gap-4 mt-10">
      <div className="flex flex-col border border-solid border-stock rounded-[14px] overflow-hidden">
        <div className="px-4 py-3.5 bg-[#f3f3f3] border-b border-solid border-stock">
          <h3 className="font-medium text-lg text-gray-text">
            Proof of ownership
          </h3>
        </div>

        <div className="p-4">
          <div className="flex flex-col gap-2.5 max-w-md">
            <label className="font-semibold text-base text-[#272B35]">
              Ownership doc*
            </label>
            <div className="bg-[#f6f6f6] rounded-xl">
              <div
                className="h-12 flex items-center justify-center gap-2.5 px-4 py-0 rounded-xl border border-dashed border-stock cursor-pointer relative"
                onClick={handleOwnershipClick}
              >
                <input
                  type="file"
                  accept="application/pdf"
                  ref={ownershipInputRef}
                  style={{ display: "none" }}
                  onChange={handleOwnershipChange}
                />
                {ownershipFile ? (
                  <div className="flex items-center gap-2.5 w-full px-2 justify-between">
                    <span className="font-semibold text-gray-text text-sm truncate max-w-[120px]">
                      {ownershipFile.name}
                    </span>
                    <button
                      type="button"
                      className="ml-2 text-gray-400 hover:text-red-500"
                      onClick={handleOwnershipRemove}
                    >
                      &#10005;
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2.5">
                    <img
                      className="w-6 h-6"
                      alt="uploadIcon"
                      src={uploadIcon}
                    />
                    <span className="font-semibold text-gray-text text-sm">
                      (Pdf only)
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-center gap-2 h-12">
        <Checkbox
          id="terms"
          checked={acceptTerms}
          onCheckedChange={setAcceptTerms}
        />
        <label
          htmlFor="terms"
          className="font-body-body-text-1 font-[600] text-[16px] text-[#272b35] cursor-pointer"
        >
          Accept RentYard property adding terms & condition
        </label>
      </div>
    </section>
  );
};

export default LandlordForm;
