import { MenuItem as MenuItemType } from "../types"; // Rename import

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuItem: MenuItemType;
  addToCart: () => void; // Use renamed type
}

const MenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>
          {menuItem.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        ${((menuItem.price)).toFixed(2)}
      </CardContent>
    </Card>
  );
}

export default MenuItem;
