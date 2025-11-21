export interface SpecRow {
  feature: string;
  model200: string;
  model300: string;
  model500: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
}

export interface CostData {
  name: string;
  cost: number; // Cost per unit/liter or normalized calculation
  fill: string;
}