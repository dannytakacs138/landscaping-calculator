export const calculateCubeVolume = (length: number) => {
  return Math.pow(length, 3);
};

export const calculateRectangularVolume = (length: number, width: number, height: number) => {
  return length * width * height;
};

export const calculateCylinderVolume = (radius: number, height: number) => {
  return Math.PI * Math.pow(radius, 2) * height;
};

export const getUnitCubed = (unit: string) => {
  switch (unit) {
    case "feet":
      return "cu ft";
    case "yards":
      return "cu yd";
    case "meters":
      return "cu m";
    case "inches":
      return "cu in";
    case "centimeters":
      return "cu cm";
    default:
      return "units³";
  }
};