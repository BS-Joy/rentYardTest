import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import uploadIcon from "../../assets/icons/upload-02.svg";

const RealtorForm = () => {
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
            <div className="flex h-12 items-center justify-center gap-2.5 px-4 py-0 bg-[#f6f6f6] rounded-xl border border-dashed border-stock">
              <div className="inline-flex items-center gap-2.5">
                <img className="w-6 h-6" alt="uploadIcon" src={uploadIcon} />
                <span className="font-semibold text-gray-text text-sm whitespace-nowrap">
                  (Pdf only)
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <label className="font-body-body-text-1 font-[number:var(--body-body-text-1-font-weight)] text-[#272b35] text-[length:var(--body-body-text-1-font-size)] tracking-[var(--body-body-text-1-letter-spacing)] leading-[var(--body-body-text-1-line-height)] [font-style:var(--body-body-text-1-font-style)]">
              Agreement with landlord*
            </label>
            <div className="flex h-12 items-center justify-center gap-2.5 px-4 py-0 bg-[#f6f6f6] rounded-xl border border-dashed border-stock">
              <div className="inline-flex items-center gap-2.5">
                <img className="w-6 h-6" alt="uploadIcon" src={uploadIcon} />
                <span className="font-semibold text-gray-text text-sm whitespace-nowrap">
                  (Pdf only)
                </span>
              </div>
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
