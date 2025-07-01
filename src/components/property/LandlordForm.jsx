import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import uploadIcon from "../../assets/icons/upload-02.svg";

const LandlordForm = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);
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
              <div className="h-12 flex items-center justify-center gap-2.5 px-4 py-0 rounded-xl border border-dashed border-stock">
                <div className="flex items-center gap-2.5">
                  <img className="w-6 h-6" alt="uploadIcon" src={uploadIcon} />
                  <span className="font-semibold text-gray-text text-sm">
                    (Pdf only)
                  </span>
                </div>
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
