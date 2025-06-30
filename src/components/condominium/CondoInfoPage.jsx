import { useState } from "react";
import CondoInfoCard from "./CondoInfoCard";
import PropertyAddressForm from "./dialogContent/PropertyAddressForm";
import LeasingForm from "./dialogContent/LeasingForm";
import PetFeesForm from "./dialogContent/PetFeesForm";
import ParkingForm from "./dialogContent/ParkingForm";

const CondoInfoPage = () => {
  const [openDialog, setOpenDialog] = useState(null);
  return (
    <div className="container mx-auto py-10">
      <h1 className="font-bold text-2xl">Condominiums information</h1>

      {/* informations */}
      <div className="grid grid-cols-2 gap-6">
        {/* property address */}
        <CondoInfoCard
          card_title="Property address"
          dialogTitle="Property address"
          cardNotice="Required"
          redNotice
          formContent={
            <PropertyAddressForm setOpen={() => setOpenDialog(null)} />
          }
          open={openDialog === "property"}
          setOpen={(val) => setOpenDialog(val ? "property" : null)}
        />

        {/* pet fees */}
        <CondoInfoCard
          card_title="Pet fees"
          dialogTitle="Pet fees"
          cardNotice="Optional, add fees if you allow pet"
          formContent={<PetFeesForm setOpen={() => setOpenDialog(null)} />}
          open={openDialog === "petFees"}
          setOpen={(val) => setOpenDialog(val ? "petFees" : null)}
        />

        {/* leasing info */}
        <CondoInfoCard
          card_title="Leasing info"
          dialogTitle="Leasing info"
          cardNotice="Required"
          redNotice
          formContent={<LeasingForm setOpen={() => setOpenDialog(null)} />}
          open={openDialog === "leasing"}
          setOpen={(val) => setOpenDialog(val ? "leasing" : null)}
        />

        {/* parking */}
        <CondoInfoCard
          card_title="Parking"
          dialogTitle="Parking"
          cardNotice="Optional"
          formContent={<ParkingForm setOpen={() => setOpenDialog(null)} />}
          open={openDialog === "parking"}
          setOpen={(val) => setOpenDialog(val ? "parking" : null)}
        />

        {/* charges */}

        {/* nearest education */}

        {/* rent frequency */}

        {/* nearest stations */}

        {/* application agreement */}

        {/* nearest landmark */}

        {/* about property */}

        {/* utilities provider */}

        {/* communitys/amenity features */}
      </div>
    </div>
  );
};

export default CondoInfoPage;
