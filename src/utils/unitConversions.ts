type Unit = 'inches' | 'feet' | 'yards' | 'centimeters' | 'meters';

const conversionToFeet: Record<Unit, number> = {
  inches: 1/12,
  feet: 1,
  yards: 3,
  centimeters: 0.0328084,
  meters: 3.28084
};

export const convertToFeet = (value: number, fromUnit: Unit): number => {
  return value * conversionToFeet[fromUnit];
};

export const convertFromFeet = (value: number, toUnit: Unit): number => {
  return value / conversionToFeet[toUnit];
};

export const units: Unit[] = ['inches', 'feet', 'yards', 'centimeters', 'meters'];