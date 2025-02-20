import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //   const items: any[] = [];
  const list_condition = items.length === 0 && <p>No item found</p>;
  //   const handleClick = (event:MouseEvent) => console.log(event);
  const [selectedIndex, setSelectedIndex] = useState(-1); // Managing State

  return (
    <>
      <h1>{heading}</h1>
      {list_condition}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
