import { FC } from "react";

interface ItemProps {
  title: any;
  year: any;
  origin: any;
}
const Item: FC<ItemProps> = ({ title, year, origin }) => {
  return (
    <div style={{ display: "flex" }}>
      <p>{title}</p>
      <p>{year}</p>
      <p>{origin}</p>
    </div>
  );
};

export default Item;
