import { Card, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { X } from "lucide-react";

const CondoInfoCard = ({
  card_title,
  dialogTitle,
  cardNotice,
  redNotice,
  formContent,
  open,
  setOpen,
}) => {
  return (
    <Card className="p-5 flex-row items-center justify-between">
      <h3 className="text-lg font-semibold">
        {card_title}
        <span className={`${redNotice ? "text-red-400" : "text-gray-text"}`}>
          ({cardNotice})
        </span>
      </h3>
      {/* <Button variant="outline" className="border-none text-primary">
        <Plus /> Add
      </Button> */}
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
          <DialogHeader className="px-6 py-4 bg-[#E0E0E0] border-b">
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
    </Card>
  );
};

export default CondoInfoCard;
