import { CircleChevronDown, UploadIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const PropertyGallery = () => {
  return (
    <div className="flex flex-col items-start gap-6 w-full mt-8">
      {/* Property Gallery Section */}
      <div className="flex flex-col items-start gap-6 w-full">
        <Card className="w-full border border-stock rounded-[14px] overflow-hidden">
          <div className="flex items-center p-5 border-b border-stock">
            <h3 className="flex-1 font-semibold text-lg">
              Property gallery
              <span className="text-[#6f6c6a]">(Its not unit photo)*</span>
            </h3>
          </div>
          <CardContent className="p-5">
            <div className="flex gap-6">
              {/* Featured Photos Section */}
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center">
                  <span className="text-base font-semibold">
                    Featured photos<span className="text-[#ff6a62]">*</span>
                  </span>
                </div>
                <div className="flex gap-2.5">
                  {/* Large upload area */}
                  <div className="flex flex-col w-[219px] h-[167px] items-center justify-center gap-2.5 p-[29px] bg-[#f6f9ff] rounded-xl border border-dashed border-[#316eed]">
                    <div className="flex flex-col w-36 items-center gap-[7px]">
                      <div className="inline-flex items-center p-1.5 rounded-md border border-dashed border-[#316eed]">
                        <UploadIcon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col items-center gap-1 w-full">
                        <span className="font-semibold text-base">
                          Upload cover photo
                        </span>
                        <span className="text-[10px] text-gray-text font-semibold">
                          (Jpg, png only)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Small upload areas - first column */}
                  <div className="flex flex-col gap-[13px]">
                    {[0, 1].map((index) => (
                      <div
                        key={`featured-small-1-${index}`}
                        className="flex h-[78px] items-center justify-center p-6 bg-[#f6f9ff] rounded-xl border border-dashed border-[#316eed]"
                      >
                        <div className="inline-flex items-center p-1.5 rounded-md border border-dashed border-[#316eed]">
                          <UploadIcon className="w-4 h-4" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Small upload areas - second column */}
                  <div className="flex flex-col gap-[13px]">
                    {[0, 1].map((index) => (
                      <div
                        key={`featured-small-2-${index}`}
                        className="flex h-[78px] items-center justify-center p-6 bg-[#f6f9ff] rounded-xl border border-dashed border-[#316eed]"
                      >
                        <div className="inline-flex items-center p-1.5 rounded-md border border-dashed border-[#316eed]">
                          <UploadIcon className="w-4 h-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* More Photos Section */}
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center">
                  <span className="font-semibold text-base">
                    More photos
                    <span className="text-[#6f6c6a]">(optional)</span>
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {/* 4 columns of 2 upload areas each */}
                  {[0, 1, 2, 3].map((col) => (
                    <div
                      key={`more-col-${col}`}
                      className="flex flex-col gap-[13px]"
                    >
                      {[0, 1].map((row) => (
                        <div
                          key={`more-${col}-${row}`}
                          className="flex h-[78px] items-center justify-center p-6 bg-[#f6f9ff] rounded-xl border border-dashed border-[#316eed]"
                        >
                          <div className="inline-flex items-center p-1.5 rounded-md border border-dashed border-[#316eed]">
                            <UploadIcon className="w-4 h-4" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Videos Section */}
        <Card className="w-full border border-solid border-stock rounded-[20px]">
          <CardContent className="flex items-center justify-between">
            <div className="flex-1">
              <span className="font-semibold text-base">
                Videos<span className="text-[#6f6c6a]"> (optional)</span>
              </span>
            </div>
            <Button variant="ghost" className="p-0 h-auto" size="icon">
              <CircleChevronDown className="size-6" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PropertyGallery;
