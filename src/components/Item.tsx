import { FC } from "react";

interface ItemProps {
  item: any;
}
const Item: FC<ItemProps> = ({ item }) => {
  return (
    <div style={{ display: "flex" }}>
      <p>{item.Title}</p>
      <p>{item.Year}</p>
      <p>{item.Origin}</p>
    </div>
  );
};

export default Item;
