import { useState, useRef } from "react";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import uploadIcon from "../../assets/icons/upload-02.svg";

const RealtorForm = () => {
  const [additionalDoc, setAdditionalDoc] = useState(null);
  const [agreementDoc, setAgreementDoc] = useState(null);
  const additionalInputRef = useRef(null);
  const agreementInputRef = useRef(null);

  const handleAdditionalClick = () => {
    additionalInputRef.current && additionalInputRef.current.click();
  };
  const handleAdditionalChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setAdditionalDoc(file);
    }
  };
  const handleAdditionalRemove = (e) => {
    e.stopPropagation();
    setAdditionalDoc(null);
    if (additionalInputRef.current) additionalInputRef.current.value = "";
  };

  const handleAgreementClick = () => {
    agreementInputRef.current && agreementInputRef.current.click();
  };
  const handleAgreementChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setAgreementDoc(file);
    }
  };
  const handleAgreementRemove = (e) => {
    e.stopPropagation();
    setAgreementDoc(null);
    if (agreementInputRef.current) agreementInputRef.current.value = "";
  };

  return (
    <div className="flex flex-col items-start gap-4 w-full mt-10">
      <div className="w-full border border-solid border-stock border-t-0 rounded-[14px] overflow-hidden">
        <div className="flex items-center justify-center gap-2.5 px-4 py-3.5 bg-[#f3f3f3] rounded-[14px_14px_0px_0px] border border-solid border-stock">
          <h3 className="flex-1 font-headline-h5-headline font-[number:var(--headline-h5-headline-font-weight)] text-tetx-color-gray text-[length:var(--headline-h5-headline-font-size)] tracking-[var(--headline-h5-headline-letter-spacing)] leading-[var(--headline-h5-headline-line-height)] [font-style:var(--headline-h5-headline-font-style)]">
            Realtor verification
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 pb-4">
          <div className="flex flex-col gap-2.5">
            <label className="font-body-body-text-1 font-[number:var(--body-body-text-1-font-weight)] text-[#272b35] text-[length:var(--body-body-text-1-font-size)] tracking-[var(--body-body-text-1-letter-spacing)] leading-[var(--body-body-text-1-line-height)] [font-style:var(--body-body-text-1-font-style)]">
              Lenience number*
            </label>
            <Input
              className="h-12 px-4 rounded-xl border border-solid border-stock"
              placeholder="000000000000"
            />
          </div>

          <div className="flex flex-col gap-2.5">
            <label className="font-body-body-text-1 font-[number:var(--body-body-text-1-font-weight)] text-[#272b35] text-[length:var(--body-body-text-1-font-size)] tracking-[var(--body-body-text-1-letter-spacing)] leading-[var(--body-body-text-1-line-height)] [font-style:var(--body-body-text-1-font-style)]">
              Additional documents for realtor
            </label>
            <div
              className="flex h-12 items-center justify-center gap-2.5 px-4 py-0 bg-[#f6f6f6] rounded-xl border border-dashed border-stock cursor-pointer relative"
              onClick={handleAdditionalClick}
            >
              <input
                type="file"
                accept="application/pdf"
                ref={additionalInputRef}
                style={{ display: "none" }}
                onChange={handleAdditionalChange}
              />
              {additionalDoc ? (
                <div className="flex items-center gap-2.5 w-full px-2 justify-between">
                  <span className="font-semibold text-gray-text text-sm truncate max-w-[120px]">
                    {additionalDoc.name}
                  </span>
                  <button
                    type="button"
                    className="ml-2 text-gray-400 hover:text-red-500"
                    onClick={handleAdditionalRemove}
                  >
                    &#10005;
                  </button>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2.5">
                  <img className="w-6 h-6" alt="uploadIcon" src={uploadIcon} />
                  <span className="font-semibold text-gray-text text-sm whitespace-nowrap">
                    (Pdf only)
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <label className="font-body-body-text-1 font-[number:var(--body-body-text-1-font-weight)] text-[#272b35] text-[length:var(--body-body-text-1-font-size)] tracking-[var(--body-body-text-1-letter-spacing)] leading-[var(--body-body-text-1-line-height)] [font-style:var(--body-body-text-1-font-style)]">
              Agreement with landlord*
            </label>
            <div
              className="flex h-12 items-center justify-center gap-2.5 px-4 py-0 bg-[#f6f6f6] rounded-xl border border-dashed border-stock cursor-pointer relative"
              onClick={handleAgreementClick}
            >
              <input
                type="file"
                accept="application/pdf"
                ref={agreementInputRef}
                style={{ display: "none" }}
                onChange={handleAgreementChange}
              />
              {agreementDoc ? (
                <div className="flex items-center gap-2.5 w-full px-2 justify-between">
                  <span className="font-semibold text-gray-text text-sm truncate max-w-[120px]">
                    {agreementDoc.name}
                  </span>
                  <button
                    type="button"
                    className="ml-2 text-gray-400 hover:text-red-500"
                    onClick={handleAgreementRemove}
                  >
                    &#10005;
                  </button>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2.5">
                  <img className="w-6 h-6" alt="uploadIcon" src={uploadIcon} />
                  <span className="font-semibold text-gray-text text-sm whitespace-nowrap">
                    (Pdf only)
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 h-12">
        <div className="flex items-center gap-2">
          <Checkbox id="terms" className="w-5 h-5" />
          <label
            htmlFor="terms"
            className="text-[#272b35] text-base font-semibold"
          >
            Accept RentYard property adding terms & condition
          </label>
        </div>
      </div>
    </div>
  );
};

export default RealtorForm;
