import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { CreditCard } from "lucide-react";

const NewCardDialog = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-primary hover:text-blue-600 text-base font-semibold underline cursor-pointer">
          Add new card
        </button>
      </DialogTrigger>
      <DialogContent className="min-w-4xl p-0 gap-0">
        <DialogHeader className="px-6 py-4 bg-stock border-b">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-base font-semibold text-gray-text">
              Add new card
            </DialogTitle>
          </div>
        </DialogHeader>

        {/* Form content */}
        <div className="px-6 py-6">
          <div className="space-y-6 border-b pb-5">
            {/* First Row - Name on card and Card number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name on card */}
              <div className="space-y-2">
                <Label htmlFor="card-name">Name on card</Label>
                <Input
                  id="card-name"
                  placeholder="Alex jones"
                  className="h-11"
                />
              </div>

              {/* Card number */}
              <div className="space-y-2">
                <Label htmlFor="card-number">Card number</Label>
                <div className="relative">
                  <Input
                    id="card-number"
                    placeholder="0000 0000 0000 0000"
                    className="h-11 pr-12"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-8 h-5 bg-red-500 rounded-sm flex items-center justify-center">
                      <div className="w-6 h-4 bg-gradient-to-r from-red-500 to-orange-400 rounded-sm relative">
                        <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-3 h-2 bg-orange-400 rounded-full opacity-80"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - Expire date and CVC */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Expire date */}
              <div className="space-y-2">
                <Label htmlFor="expire-date">Expire date</Label>
                <Input id="expire-date" placeholder="MM/YY" className="h-11" />
              </div>

              {/* CVC */}
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <div className="relative">
                  <Input id="cvc" placeholder="123" className="h-11 pr-12" />
                  <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-5">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-2 h-11 rounded-lg text-base font-bold">
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewCardDialog;
