import { useRef, useState } from "react";
import { CircleChevronDown, UploadIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const initialSmallImages = Array(4).fill(null); // 2 for each featured column
const initialMoreImages = Array(8).fill(null); // 4 columns x 2 rows

const PropertyGallery = () => {
  const [coverImage, setCoverImage] = useState(null);
  const fileInputRef = useRef(null);

  // For small featured images
  const [smallImages, setSmallImages] = useState([...initialSmallImages]);
  const smallInputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // For more photos
  const [moreImages, setMoreImages] = useState([...initialMoreImages]);
  const moreInputRefs = Array.from({ length: 8 }, () => useRef(null));

  const handleCoverClick = () => {
    fileInputRef.current && fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setCoverImage(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Small featured upload handlers
  const handleSmallClick = (idx) => {
    smallInputRefs[idx].current && smallInputRefs[idx].current.click();
  };
  const handleSmallChange = (idx, e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setSmallImages((prev) => {
          const arr = [...prev];
          arr[idx] = ev.target.result;
          return arr;
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSmallRemove = (idx, e) => {
    e.stopPropagation();
    setSmallImages((prev) => {
      const arr = [...prev];
      arr[idx] = null;
      return arr;
    });
  };

  // More photos upload handlers
  const handleMoreClick = (idx) => {
    moreInputRefs[idx].current && moreInputRefs[idx].current.click();
  };
  const handleMoreChange = (idx, e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setMoreImages((prev) => {
          const arr = [...prev];
          arr[idx] = ev.target.result;
          return arr;
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleMoreRemove = (idx, e) => {
    e.stopPropagation();
    setMoreImages((prev) => {
      const arr = [...prev];
      arr[idx] = null;
      return arr;
    });
  };

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
                <div className="flex flex-col sm:flex-row gap-2.5">
                  {/* Large upload area */}
                  <div
                    className="flex flex-col w-[219px] h-[167px] items-center justify-center gap-2.5 bg-[#f6f9ff] rounded-xl border border-dashed border-[#316eed] cursor-pointer relative overflow-hidden"
                    onClick={!coverImage ? handleCoverClick : undefined}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                      tabIndex={-1}
                    />
                    {coverImage ? (
                      <>
                        <img
                          src={coverImage}
                          alt="Cover Preview"
                          className="absolute inset-0 w-full h-full object-cover rounded-xl z-0"
                        />
                        <button
                          type="button"
                          className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white rounded-full p-1 shadow"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCoverImage(null);
                          }}
                        >
                          <X className="w-5 h-5 text-gray-700" />
                        </button>
                      </>
                    ) : (
                      <div className="flex flex-col w-36 items-center gap-[7px] z-10">
                        <div className="inline-flex items-center p-1.5 rounded-md border border-dashed border-[#316eed] min-h-[48px] min-w-[48px] justify-center">
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
                    )}
                  </div>

                  {/* Small upload areas - first column */}
                  <div className="flex flex-col gap-[13px]">
                    {[0, 1].map((index) => {
                      const idx = index;
                      return (
                        <div
                          key={`featured-small-1-${index}`}
                          className="flex h-[78px] w-[78px] items-center justify-center p-0 bg-[#f6f9ff] rounded-xl border border-dashed border-[#316eed] cursor-pointer relative overflow-hidden"
                          onClick={
                            !smallImages[idx]
                              ? () => handleSmallClick(idx)
                              : undefined
                          }
                        >
                          <input
                            type="file"
                            accept="image/*"
                            ref={smallInputRefs[idx]}
                            style={{ display: "none" }}
                            onChange={(e) => handleSmallChange(idx, e)}
                            tabIndex={-1}
                          />
                          {smallImages[idx] ? (
                            <>
                              <img
                                src={smallImages[idx]}
                                alt="Small Preview"
                                className="absolute inset-0 w-full h-full object-cover rounded-xl z-0"
                              />
                              <button
                                type="button"
                                className="absolute top-1 right-1 z-10 bg-white/80 hover:bg-white rounded-full p-1 shadow"
                                onClick={(e) => handleSmallRemove(idx, e)}
                              >
                                <X className="w-4 h-4 text-gray-700" />
                              </button>
                            </>
                          ) : (
                            <div className="inline-flex items-center p-1.5 rounded-md border border-dashed border-[#316eed] min-h-[32px] min-w-[32px] justify-center z-10">
                              <UploadIcon className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Small upload areas - second column */}
                  <div className="flex flex-col gap-[13px]">
                    {[2, 3].map((index) => {
                      const idx = index;
                      return (
                        <div
                          key={`featured-small-2-${index}`}
                          className="flex h-[78px] w-[78px] items-center justify-center p-0 bg-[#f6f9ff] rounded-xl border border-dashed border-[#316eed] cursor-pointer relative overflow-hidden"
                          onClick={
                            !smallImages[idx]
                              ? () => handleSmallClick(idx)
                              : undefined
                          }
                        >
                          <input
                            type="file"
                            accept="image/*"
                            ref={smallInputRefs[idx]}
                            style={{ display: "none" }}
                            onChange={(e) => handleSmallChange(idx, e)}
                            tabIndex={-1}
                          />
                          {smallImages[idx] ? (
                            <>
                              <img
                                src={smallImages[idx]}
                                alt="Small Preview"
                                className="absolute inset-0 w-full h-full object-cover rounded-xl z-0"
                              />
                              <button
                                type="button"
                                className="absolute top-1 right-1 z-10 bg-white/80 hover:bg-white rounded-full p-1 shadow"
                                onClick={(e) => handleSmallRemove(idx, e)}
                              >
                                <X className="w-4 h-4 text-gray-700" />
                              </button>
                            </>
                          ) : (
                            <div className="inline-flex items-center p-1.5 rounded-md border border-dashed border-[#316eed] min-h-[32px] min-w-[32px] justify-center z-10">
                              <UploadIcon className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                      );
                    })}
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
                      {[0, 1].map((row) => {
                        const idx = col * 2 + row;
                        return (
                          <div
                            key={`more-${col}-${row}`}
                            className="flex h-[78px] w-[78px] items-center justify-center p-0 bg-[#f6f9ff] rounded-xl border border-dashed border-[#316eed] cursor-pointer relative overflow-hidden"
                            onClick={
                              !moreImages[idx]
                                ? () => handleMoreClick(idx)
                                : undefined
                            }
                          >
                            <input
                              type="file"
                              accept="image/*"
                              ref={moreInputRefs[idx]}
                              style={{ display: "none" }}
                              onChange={(e) => handleMoreChange(idx, e)}
                              tabIndex={-1}
                            />
                            {moreImages[idx] ? (
                              <>
                                <img
                                  src={moreImages[idx]}
                                  alt="More Preview"
                                  className="absolute inset-0 w-full h-full object-cover rounded-xl z-0"
                                />
                                <button
                                  type="button"
                                  className="absolute top-1 right-1 z-10 bg-white/80 hover:bg-white rounded-full p-1 shadow"
                                  onClick={(e) => handleMoreRemove(idx, e)}
                                >
                                  <X className="w-4 h-4 text-gray-700" />
                                </button>
                              </>
                            ) : (
                              <div className="inline-flex items-center p-1.5 rounded-md border border-dashed border-[#316eed] min-h-[32px] min-w-[32px] justify-center z-10">
                                <UploadIcon className="w-4 h-4" />
                              </div>
                            )}
                          </div>
                        );
                      })}
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
