import React from "react";
import { Link } from "react-router";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between container mx-auto">
      <Link to="#" className="underline">
        Back
      </Link>
      <Button variant="default" size="lg" className="font-semibold">
        Get started
      </Button>
    </footer>
  );
};

export default Footer;
