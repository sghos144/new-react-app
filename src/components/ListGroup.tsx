import { useState } from "react";

function ListGroup() {
  //   const items: any[] = [];
  const items = ["New York", "London", "Tokyo", "San Francisco", "Paris"];
  const list_condition = items.length === 0 && <p>No item found</p>;
  //   const handleClick = (event:MouseEvent) => console.log(event);
  const [selectedIndex, setSelectedIndex] = useState(-1); // Managing State

  return (
    <>
      <h1>List</h1>
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
            onClick={() => {setSelectedIndex(index); console.log(index + ' : ' + item)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
