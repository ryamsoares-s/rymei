import { CircleDollarSign } from "lucide-react";

interface RymeiLogoProps {
  className?: string;
}

export function RymeiLogo({ className = "h-6 w-6" }: RymeiLogoProps) {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <div className="absolute inset-0 bg-teal-500 rounded-full opacity-20"></div>
      <div className="absolute inset-1 bg-teal-100 rounded-full"></div>
      <CircleDollarSign className="absolute text-teal-600 h-full w-full p-1" />
      <div className="absolute top-0 right-0 h-2 w-2 bg-teal-500 rounded-full"></div>
    </div>
  );
}
