import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface UnitSelectProps {
  value: string;
  onValueChange: (value: string) => void;
}

export const UnitSelect = ({ value, onValueChange }: UnitSelectProps) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-24">
        <SelectValue placeholder="Unit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="inches">in</SelectItem>
        <SelectItem value="feet">ft</SelectItem>
        <SelectItem value="yards">yd</SelectItem>
        <SelectItem value="centimeters">cm</SelectItem>
        <SelectItem value="meters">m</SelectItem>
      </SelectContent>
    </Select>
  );
};