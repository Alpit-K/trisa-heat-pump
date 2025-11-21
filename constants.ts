import { SpecRow, FeatureItem, CostData } from './types';

export const COMPANY_NAME = "trisã";
export const TAGLINE = "Solution to Economical, Effective & Sustainable Heating";

export const FEATURES: FeatureItem[] = [
  {
    title: "Eco-Friendly Refrigerant",
    description: "Uses R32 refrigerant, ensuring minimal environmental impact while maximizing heating efficiency.",
    iconName: "Leaf"
  },
  {
    title: "All-Weather Reliability",
    description: "Auto defrost sensors protect equipment and ensure hot water availability even in low ambient temperatures.",
    iconName: "ThermometerSnowflake"
  },
  {
    title: "Smart Efficiency",
    description: "Features ECO and Auto modes to optimize power consumption based on your usage patterns.",
    iconName: "Zap"
  },
  {
    title: "Durable Construction",
    description: "High-density PUF insulated tank (50mm) with enamel glass lining prevents heat loss and ensures longevity.",
    iconName: "ShieldCheck"
  },
  {
    title: "Corrosion Protection",
    description: "Equipped with a Magnesium (Mg) anode rod specifically designed to combat hard water corrosion.",
    iconName: "Droplet"
  },
  {
    title: "Smart Control",
    description: "User-friendly digital interface compatible with the 'Smartlife' mobile app for remote temperature control.",
    iconName: "Smartphone"
  }
];

export const SPECS: SpecRow[] = [
  { feature: "Tank Volume (Litre)", model200: "200", model300: "300", model500: "500" },
  { feature: "Production Capacity (LPH)", model200: "80", model300: "100", model500: "150" },
  { feature: "Heating Capacity (W)", model200: "3600", model300: "3600", model500: "5350" },
  { feature: "Power Input (W)", model200: "900", model300: "900", model500: "1340" },
  { feature: "Current (A)", model200: "4.0", model300: "4.0", model500: "5.9" },
  { feature: "COP", model200: "4", model300: "4", model500: "4" },
  { feature: "Refrigerant", model200: "R32", model300: "R32", model500: "R32" },
  { feature: "Max Temp (°C)", model200: "55", model300: "55", model500: "55" },
  { feature: "Heat Pump Dimensions (mm)", model200: "717×240×495", model300: "717×240×495", model500: "717×240×495" },
  { feature: "Tank Dimensions (mm)", model200: "520×1570", model300: "650×1750", model500: "710×1860" },
  { feature: "Tank Weight (Approx Kg)", model200: "70", model300: "87", model500: "144" },
];

// Normalized cost for comparison (based on the chart relative heights in PDF)
export const COST_COMPARISON_DATA: CostData[] = [
  { name: "Heat Pump", cost: 9.90, fill: "#4ade80" },
  { name: "Gas Geyser (LPG)", cost: 18.20, fill: "#facc15" },
  { name: "Boiler (Diesel)", cost: 25.55, fill: "#94a3b8" },
  { name: "Electric Geyser", cost: 34.65, fill: "#f87171" },
];

export const WARRANTY_ITEMS = [
    { years: "6", label: "Years on Compressor" },
    { years: "5", label: "Years on Tank" },
    { years: "3", label: "Years on Electrical Components" },
];

export const ABOUT_SECTIONS = [
  {
    title: "Refrigeration",
    content: "Roll bond evaporators, fin evaporators, filter driers, Cu-Al suction assembly, and high-quality sheet metal components."
  },
  {
    title: "Air Conditioning",
    content: "Air conditioner ODU/IDU, heat pumps, connecting kits, heat exchanger coils, and water chillers."
  },
  {
    title: "Electrical",
    content: "Metal flush boxes, surface boxes, distribution boxes (standard and non-standard)."
  }
];