import { DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";

type Props = {
  onChange: (value: string) => void;
  sortOption: string;
};

const SORT_OPTIONS = [
  {
    label: "Best match",
    value: "bestMatch"
  },
  {
    label: "Delivery Price",
    value: "deliverPrice"
  },
  {
    label: "Estimated delivery time",
    value: "estimatedDeliveryTime"
  }
];

const SortOptionDropdown = ({ onChange, sortOption }: Props) => {
    const selectedSortLabel = SORT_OPTIONS.find((option) => option.value === sortOption)?.label ||
    SORT_OPTIONS[0].label;


  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <Button variant="outline" className="w-full">
          Sorted by: {selectedSortLabel}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border border-gray-200 rounded-md shadow-md mt-1">
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
            className="cursor-pointer py-2 px-4 block text-sm text-gray-800 hover:bg-gray-100"
            key={option.value}
            onSelect={() => onChange(option.value)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortOptionDropdown;
