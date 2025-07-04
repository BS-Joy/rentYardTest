import { Checkbox } from "../../components/ui/checkbox";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import uploadIcon from "../../assets/icons/upload-02.svg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState, useRef } from "react";

const CompanyForm = () => {
  const [value, setValue] = useState();
  const [agreementFile, setAgreementFile] = useState(null);
  const agreementInputRef = useRef(null);

  const handleAgreementClick = () => {
    agreementInputRef.current && agreementInputRef.current.click();
  };

  const handleAgreementChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setAgreementFile(file);
    }
  };

  const handleAgreementRemove = (e) => {
    e.stopPropagation();
    setAgreementFile(null);
    if (agreementInputRef.current) agreementInputRef.current.value = "";
  };

  return (
    <div className="flex flex-col items-start gap-4 w-full mt-10">
      <div className="w-full border border-solid border-stock border-t-0 rounded-[14px] overflow-hidden">
        <div className="flex items-center justify-center gap-2.5 px-4 py-3.5 bg-[#f3f3f3] rounded-[14px_14px_0px_0px] border border-solid border-stock">
          <h3 className="flex-1 font-headline-h5-headline text-tetx-color-gray text-[length:var(--headline-h5-headline-font-size)] tracking-[var(--headline-h5-headline-letter-spacing)] leading-[var(--headline-h5-headline-line-height)]">
            Company &amp; office info
          </h3>
        </div>

        <div className="p-4 pb-4">
          {/* First row of form fields */}
          <div className="flex items-start gap-4 w-full mb-4">
            <div className="flex-1">
              <div className="mb-2.5 font-body-body-text-1 text-[#272b35] text-[length:var(--body-body-text-1-font-size)] tracking-[var(--body-body-text-1-letter-spacing)] leading-[var(--body-body-text-1-line-height)]">
                Company name*
              </div>
              <Input
                className="h-12 rounded-xl border border-solid border-stock"
                defaultValue="Runyan trade center"
              />
            </div>

            <div className="flex-1">
              <div className="mb-2.5 font-body-body-text-1 text-[#272b35] text-[length:var(--body-body-text-1-font-size)] tracking-[var(--body-body-text-1-letter-spacing)] leading-[var(--body-body-text-1-line-height)]">
                Company Identifier(EIN/TIN)*
              </div>
              <Input
                className="h-12 rounded-xl border border-solid border-stock"
                defaultValue="Name"
              />
            </div>

            <div className="flex-1">
              <div className="mb-2.5 font-body-body-text-1 text-[#272b35] text-[length:var(--body-body-text-1-font-size)] tracking-[var(--body-body-text-1-letter-spacing)] leading-[var(--body-body-text-1-line-height)]">
                Your job title*
              </div>
              <Input
                className="h-12 rounded-xl border border-solid border-stock"
                defaultValue="Manager"
              />
            </div>

            <div className="flex-1">
              <div className="mb-2.5 font-body-body-text-1 text-[#272b35] text-[length:var(--body-body-text-1-font-size)] tracking-[var(--body-body-text-1-letter-spacing)] leading-[var(--body-body-text-1-line-height)]">
                Agreement with landlord/owner*
              </div>
              <div
                className="flex items-center justify-center h-12 bg-[#f6f6f6] rounded-xl border border-dashed border-stock cursor-pointer relative"
                onClick={handleAgreementClick}
              >
                <input
                  type="file"
                  accept="application/pdf"
                  ref={agreementInputRef}
                  style={{ display: "none" }}
                  onChange={handleAgreementChange}
                />
                {agreementFile ? (
                  <div className="flex items-center gap-2.5 w-full px-2 justify-between">
                    <span className="font-semibold text-gray-text text-sm truncate max-w-[120px]">
                      {agreementFile.name}
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
                  <div className="flex items-center gap-2.5">
                    <img
                      className="w-6 h-6"
                      alt="uploadIcon"
                      src={uploadIcon}
                    />
                    <span className="font-semibold text-gray-text text-sm whitespace-nowrap">
                      (Pdf only)
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Second row of form fields */}
          <div className="flex items-start gap-4 w-full mb-4">
            <div className="flex-1">
              <div className="mb-2.5 font-body-body-text-1 text-[#272b35] text-[length:var(--body-body-text-1-font-size)] tracking-[var(--body-body-text-1-letter-spacing)] leading-[var(--body-body-text-1-line-height)]">
                Country/Region*
              </div>
              <Select>
                <SelectTrigger className="h-12 py-6 rounded-xl border border-solid border-stock w-full">
                  <SelectValue placeholder="Choose country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1">
              <div className="mb-2.5 font-body-body-text-1 text-[#272b35] text-[length:var(--body-body-text-1-font-size)] tracking-[var(--body-body-text-1-letter-spacing)] leading-[var(--body-body-text-1-line-height)]">
                Street address*
              </div>
              <Input
                className="h-12 rounded-xl border border-solid border-stock"
                defaultValue="111 Austin Ave"
              />
            </div>

            <div className="flex-1">
              <div className="mb-2.5 font-body-body-text-1 text-[#272b35] text-[length:var(--body-body-text-1-font-size)] tracking-[var(--body-body-text-1-letter-spacing)] leading-[var(--body-body-text-1-line-height)]">
                Apt, suit, unit (if applicable)
              </div>
              <Input
                className="h-12 rounded-xl border border-solid border-stock"
                defaultValue="3050"
              />
            </div>

            <div className="flex-1">
              <div className="mb-2.5 font-body-body-text-1 text-[#272b35] text-[length:var(--body-body-text-1-font-size)] tracking-[var(--body-body-text-1-letter-spacing)] leading-[var(--body-body-text-1-line-height)]">
                Phone number*
              </div>
              <div className="flex">
                <PhoneInput
                  placeholder="Enter phone number"
                  defaultCountry="BD"
                  value={value}
                  onChange={setValue}
                  className="w-full py-2 px-4 rounded-xl border border-stock focus-within:border-ring"
                />
              </div>
            </div>
          </div>

          {/* Third row of form fields */}
          <div className="flex items-start gap-4 w-full">
            <div className="flex-1">
              <div className="mb-2.5 font-body-body-text-1 text-[#272b35] text-[length:var(--body-body-text-1-font-size)] tracking-[var(--body-body-text-1-letter-spacing)] leading-[var(--body-body-text-1-line-height)]">
                Contact email*
              </div>
              <Input
                className="h-12 rounded-xl border border-solid border-stock"
                defaultValue="majarul2025@gmail.com"
                type="email"
              />
            </div>

            <div className="flex-1">
              <div className="mb-2.5 font-body-body-text-1 text-[#272b35] text-[length:var(--body-body-text-1-font-size)] tracking-[var(--body-body-text-1-letter-spacing)] leading-[var(--body-body-text-1-line-height)]">
                City/Town*
              </div>
              <Input
                className="h-12 rounded-xl border border-solid border-stock"
                defaultValue="Dallas"
              />
            </div>

            <div className="flex-1">
              <div className="mb-2.5 font-body-body-text-1 text-[#272b35] text-[length:var(--body-body-text-1-font-size)] tracking-[var(--body-body-text-1-letter-spacing)] leading-[var(--body-body-text-1-line-height)]">
                State/Territory*
              </div>
              <Select>
                <SelectTrigger className="h-12 py-6 w-full rounded-xl border border-solid border-stock">
                  <SelectValue placeholder="Choose state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tx">Texas</SelectItem>
                  <SelectItem value="ca">California</SelectItem>
                  <SelectItem value="ny">New York</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1">
              <div className="mb-2.5 font-body-body-text-1 text-[#272b35] text-[length:var(--body-body-text-1-font-size)] tracking-[var(--body-body-text-1-letter-spacing)] leading-[var(--body-body-text-1-line-height)]">
                Zip code*
              </div>
              <Input
                className="h-12 rounded-xl border border-solid border-stock"
                defaultValue="75061"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Conditions Checkbox */}
      <div className="flex items-center h-12 gap-2.5">
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

export default CompanyForm;
