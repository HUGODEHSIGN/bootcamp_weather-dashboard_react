import {
  Cloud,
  CloudFog,
  CloudHail,
  CloudRain,
  Snowflake,
  Sun,
  Tornado,
  Zap,
} from "lucide-react";
import { ReactElement } from "react";

interface MainStatsColor {
  [key: string]: string;
}

export const mainStatusColor: MainStatsColor = {
  Thunderstorm: "bg-amber-300 text-black",
  Drizzle: "bg-cyan-300 text-black",
  Rain: "bg-cyan-300 text-black",
  Snow: "bg-sky-100 text-black",
  Mist: "bg-sky-100 text-black",
  Smoke: "bg-stone-500 text-white",
  Haze: "bg-stone-500 text-white",
  Dust: "bg-stone-500 text-white",
  Fog: "bg-gray-100 text-black",
  Sand: "bg-orange-50 text-black",
  Ash: "bg-gray-100 text-black",
  Squall: "bg-stone-700 text-white",
  Tornado: "bg-stone-700 text-white",
  Clear: "bg-sky-100 text-black",
  Clouds: "bg-gray-100 text-black",
};

interface MainStatusIcon {
  [key: string]: ReactElement;
}

export const mainStatusIcon: MainStatusIcon = {
  Thunderstorm: (
    <Zap className="absolute -right-20 -top-32 h-[400px] w-[400px]" />
  ),
  Drizzle: (
    <CloudHail className="absolute -right-20 -top-32 h-[400px] w-[400px]" />
  ),
  Rain: (
    <CloudRain className="absolute -right-20 -top-32 h-[400px] w-[400px]" />
  ),
  Snow: (
    <Snowflake className="absolute -right-20 -top-32 h-[400px] w-[400px]" />
  ),
  Mist: <CloudFog className="absolute -right-20 -top-32 h-[400px] w-[400px]" />,
  Smoke: (
    <CloudFog className="absolute -right-20 -top-32 h-[400px] w-[400px]" />
  ),
  Haze: <CloudFog className="absolute -right-20 -top-32 h-[400px] w-[400px]" />,
  Dust: <CloudFog className="absolute -right-20 -top-32 h-[400px] w-[400px]" />,
  Fog: <CloudFog className="absolute -right-20 -top-32 h-[400px] w-[400px]" />,
  Sand: <CloudFog className="absolute -right-20 -top-32 h-[400px] w-[400px]" />,
  Ash: <CloudFog className="absolute -right-20 -top-32 h-[400px] w-[400px]" />,
  Squall: (
    <CloudFog className="absolute -right-20 -top-32 h-[400px] w-[400px]" />
  ),
  Tornado: (
    <Tornado className="absolute -right-20 -top-32 h-[400px] w-[400px]" />
  ),
  Clear: <Sun className="absolute -right-20 -top-32 h-[400px] w-[400px]" />,
  Clouds: <Cloud className="absolute -right-20 -top-32 h-[400px] w-[400px]" />,
};
