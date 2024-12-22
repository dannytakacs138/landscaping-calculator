import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ShapeSelectorProps {
  value: string;
  onValueChange: (value: string) => void;
}

export const ShapeSelector = ({ value, onValueChange }: ShapeSelectorProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Shape
      </label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select shape" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="cube">Cube</SelectItem>
          <SelectItem value="rectangular">Rectangular Prism</SelectItem>
          <SelectItem value="cylinder">Cylinder</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};