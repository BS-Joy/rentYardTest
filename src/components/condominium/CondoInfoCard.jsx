import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const CondoInfoCard = ({
  card_title,
  dialogTitle,
  cardNotice,
  redNotice,
  formContent,
  open,
  setOpen,
  cardData,
}) => {
  console.log(cardData);
  return (
    <Card className={`gap-2 ${cardData ? "" : "flex-row items-center"}`}>
      {/* card header */}
      <div className="py-0 px-5 flex w-full justify-between items-center">
        <h3 className="text-lg font-semibold">
          {card_title}
          <span className={`${redNotice ? "text-red-400" : "text-gray-text"}`}>
            ({cardNotice})
          </span>
        </h3>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="border-none underline text-primary"
            >
              <Plus /> Add
            </Button>
          </DialogTrigger>
          <DialogContent className="min-w-4xl p-0 gap-0">
            <DialogHeader className="px-6 py-4 bg-stock border-b">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-base font-semibold text-gray-text">
                  {dialogTitle}
                </DialogTitle>
              </div>
            </DialogHeader>

            {/* Form content */}
            {formContent}
          </DialogContent>
        </Dialog>
      </div>

      {/* card content */}
      {cardData && <div className="px-5 pt-5 border-t">{cardData}</div>}
    </Card>
  );
};

export default CondoInfoCard;
