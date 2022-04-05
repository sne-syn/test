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
          <Item title={item.Title} year={item.Year} origin={item.Origin} />
        </li>
      ))}
    </ul>
  );
};

export default List;
