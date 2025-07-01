import { Link, useLocation, useNavigate } from "react-router";
import { Button } from "../ui/button";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  let nextRoute;
  let previousRoute;
  let buttonText;

  if (currentPath === "/") {
    buttonText = "Get started";
  } else if (currentPath === "/condoinfo") {
    buttonText = "Next";
  } else if (currentPath === "/pricing") {
    buttonText = "Pay & add property";
  }

  if (currentPath === "/condoinfo") {
    previousRoute = "/";
  } else if (currentPath === "/pricing") {
    previousRoute = "/condoinfo";
  }

  if (currentPath === "/") {
    nextRoute = "/condoinfo";
  } else if (currentPath === "/condoinfo") {
    nextRoute = "/pricing";
  }

  return (
    <footer className="flex items-center justify-between container mx-auto py-8">
      <Link to={previousRoute} className="underline">
        Back
      </Link>
      <Button
        onClick={() => navigate(nextRoute)}
        variant="default"
        size="lg"
        className="font-semibold text-base"
      >
        {buttonText}
      </Button>
    </footer>
  );
};

export default Footer;
