import React from "react";

interface TrafficLightIconProps {
  className?: string;
}

const TrafficLightIcon: React.FC<TrafficLightIconProps> = ({
  className = "h-8 w-8",
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Traffic Light Housing */}
      <rect
        x="8"
        y="2"
        width="8"
        height="20"
        rx="2"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.8"
      />

      {/* Red Light */}
      <circle
        cx="12"
        cy="6"
        r="2"
        fill="hsl(var(--traffic-red))"
        className="animate-pulse"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      />

      {/* Yellow Light */}
      <circle
        cx="12"
        cy="12"
        r="2"
        fill="hsl(var(--traffic-yellow))"
        className="animate-pulse"
        style={{ animationDelay: "1s", animationDuration: "3s" }}
      />

      {/* Green Light */}
      <circle
        cx="12"
        cy="18"
        r="2"
        fill="hsl(var(--traffic-green))"
        className="animate-pulse"
        style={{ animationDelay: "2s", animationDuration: "3s" }}
      />

      {/* Pole */}
      <rect
        x="11.5"
        y="22"
        width="1"
        height="2"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
};

export default TrafficLightIcon;
