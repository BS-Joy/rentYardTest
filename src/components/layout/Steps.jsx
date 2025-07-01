import { useLocation } from "react-router";

const Steps = () => {
  const location = useLocation();
  const path = location.pathname;

  // Determine step completion based on path
  let stepStatus = ["gray", "gray", "gray"];
  if (path === "/") {
    stepStatus = ["black", "gray", "gray"];
  } else if (path === "/condoinfo") {
    stepStatus = ["black", "black", "gray"];
  } else if (path === "/pricing") {
    stepStatus = ["black", "black", "black"];
  }

  return (
    <div className="flex justify-between gap-1">
      {stepStatus.map((color, idx) => (
        <div
          key={idx}
          className={`w-full rounded-full h-1 ${
            color === "black" ? "bg-black" : "bg-gray-300"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default Steps;
