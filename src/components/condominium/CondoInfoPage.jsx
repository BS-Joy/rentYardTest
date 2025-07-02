import { useState } from "react";
import CondoInfoCard from "./CondoInfoCard";
import PropertyAddressForm from "./dialogContent/PropertyAddressForm";
import LeasingForm from "./dialogContent/LeasingForm";
import PetFeesForm from "./dialogContent/PetFeesForm";
import ParkingForm from "./dialogContent/ParkingForm";
import ChargesForm from "./dialogContent/ChargesForm";
import RentFrequencyForm from "./dialogContent/RentFrequencyForm";
import ApplicationAgreementForm from "./dialogContent/ApplicationAgreementForm";
import AboutPropertyForm from "./dialogContent/AboutPropertyForm";
import CommunityForm from "./dialogContent/CommunityForm";
import EducationalInstutionform from "./dialogContent/EducationalInstutionform";
import NearestStationForm from "./dialogContent/NearestStationForm";
import LandMarkForm from "./dialogContent/LandMarkForm";
import UtilityProviderForm from "./dialogContent/UtilityProviderForm";
import PropertyGallery from "./PropertyGallery";
import { useProperty } from "../../hooks/UseProperty";

const CondoInfoPage = () => {
  const { propertyData } = useProperty();
  const [openDialog, setOpenDialog] = useState(null);
  const propertyAddress = propertyData?.address || {};
  return (
    <div className="container mx-auto py-10">
      <h1 className="font-bold text-2xl mb-8">Condominiums information</h1>

      <p className="text-red-400 font-semibold">
        (Only this one is functional 👇)
      </p>
      {/* informations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
          cardData={
            propertyAddress?.country
              ? `${propertyAddress?.propertyName}, ${propertyAddress?.propertyWebsite}, Total unit: ${propertyAddress?.apartmentUnits}, ${propertyAddress?.aptSuite}
        ${propertyAddress.streetAddress}, ${propertyAddress?.country}`
              : false
          }
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
        <CondoInfoCard
          card_title="Charges"
          dialogTitle="Charges"
          cardNotice="Required"
          redNotice
          formContent={<ChargesForm setOpen={() => setOpenDialog(null)} />}
          open={openDialog === "charges"}
          setOpen={(val) => setOpenDialog(val ? "charges" : null)}
        />

        {/* nearest education */}
        <CondoInfoCard
          card_title="Nearest educational institution"
          dialogTitle="Add nearest educational institution"
          cardNotice="Optional but recommended"
          formContent={
            <EducationalInstutionform setOpen={() => setOpenDialog(null)} />
          }
          open={openDialog === "educationalInstitution"}
          setOpen={(val) =>
            setOpenDialog(val ? "educationalInstitution" : null)
          }
        />

        {/* rent frequency */}
        <CondoInfoCard
          card_title="Rent frequency & payment reminder"
          dialogTitle="Rent frequency & payment reminder"
          cardNotice="Required"
          redNotice
          formContent={
            <RentFrequencyForm setOpen={() => setOpenDialog(null)} />
          }
          open={openDialog === "rentFrequency"}
          setOpen={(val) => setOpenDialog(val ? "rentFrequency" : null)}
        />

        {/* nearest stations */}
        <CondoInfoCard
          card_title="Nearest stations"
          dialogTitle="Add nearest station"
          cardNotice="Optional but recommended"
          formContent={
            <NearestStationForm setOpen={() => setOpenDialog(null)} />
          }
          open={openDialog === "nearestStation"}
          setOpen={(val) => setOpenDialog(val ? "nearestStation" : null)}
        />

        {/* application agreement */}
        <CondoInfoCard
          card_title="Application agreement"
          dialogTitle="Application agreement(optional)"
          cardNotice="Optional"
          formContent={
            <ApplicationAgreementForm setOpen={() => setOpenDialog(null)} />
          }
          open={openDialog === "applicationAgreement"}
          setOpen={(val) => setOpenDialog(val ? "applicationAgreement" : null)}
        />

        {/* nearest landmark */}
        <CondoInfoCard
          card_title="Nearest landmark"
          dialogTitle="Add nearest landmark"
          cardNotice="Optional but recommended"
          formContent={<LandMarkForm setOpen={() => setOpenDialog(null)} />}
          open={openDialog === "nearestStation"}
          setOpen={(val) => setOpenDialog(val ? "nearestStation" : null)}
        />

        {/* about property */}
        <CondoInfoCard
          card_title="About the property"
          dialogTitle="About the Property(optional)"
          cardNotice="Optional"
          formContent={
            <AboutPropertyForm setOpen={() => setOpenDialog(null)} />
          }
          open={openDialog === "aboutProperty"}
          setOpen={(val) => setOpenDialog(val ? "aboutProperty" : null)}
        />

        {/* utilities provider */}
        <CondoInfoCard
          card_title="Utilities provider"
          dialogTitle="Utilities provider"
          cardNotice="Optional but recommended"
          formContent={
            <UtilityProviderForm setOpen={() => setOpenDialog(null)} />
          }
          open={openDialog === "utilityProvider"}
          setOpen={(val) => setOpenDialog(val ? "utilityProvider" : null)}
        />

        {/* communitys/amenity features */}
        <CondoInfoCard
          card_title="Community's amenity/features"
          dialogTitle="Community's amenity/features"
          cardNotice="Optional"
          formContent={<CommunityForm setOpen={() => setOpenDialog(null)} />}
          open={openDialog === "communityAmenity"}
          setOpen={(val) => setOpenDialog(val ? "communityAmenity" : null)}
        />
      </div>

      <PropertyGallery />
    </div>
  );
};

export default CondoInfoPage;
