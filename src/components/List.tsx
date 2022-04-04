import { FC } from "react";
import Item from "./Item";

interface ListProps {
  items: any[];
}

const List: FC<ListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
};

export default List;
