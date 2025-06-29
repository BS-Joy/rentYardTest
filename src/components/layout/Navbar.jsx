import { Button } from "../ui/button";
import logoImage from "../../assets/logo.webp";

export const Navbar = () => {
  return (
    <header className="py-4 border-b border-[#e0e0e0]">
      <div className="container mx-auto w-full flex justify-between items-center">
        <img
          className="w-[147.28px] h-[38.78px] object-cover"
          alt="RentYard Logo"
          src={logoImage}
        />
        <Button variant="outline" className="px-6 py-3 rounded-xl h-12">
          Exit
        </Button>
      </div>
    </header>
  );
};
