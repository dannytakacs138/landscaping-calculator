export const convertToFeet = (value: number, unit: string): number => {
  switch (unit) {
    case "inches":
      return value / 12;
    case "feet":
      return value;
    case "yards":
      return value * 3;
    case "centimeters":
      return value / 30.48;
    case "meters":
      return value * 3.28084;
    default:
      return value;
  }
};

export const calculateWallBlocks = (
  length: number,
  height: number,
  thickness: number,
  lengthUnit: string,
  heightUnit: string,
  thicknessUnit: string
) => {
  const lengthInFeet = convertToFeet(length, lengthUnit);
  const heightInFeet = convertToFeet(height, heightUnit);
  const thicknessInFeet = convertToFeet(thickness, thicknessUnit);

  const blockLengthInFeet = 16 / 12;
  const blockHeightInFeet = 8 / 12;
  const blockThicknessInFeet = 8 / 12;

  const blocksPerRow = Math.ceil(lengthInFeet / blockLengthInFeet);
  const numberOfRows = Math.ceil(heightInFeet / blockHeightInFeet);
  const numberOfLayers = Math.ceil(thicknessInFeet / blockThicknessInFeet);

  return blocksPerRow * numberOfRows * numberOfLayers;
};