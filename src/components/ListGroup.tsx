import { MouseEvent } from "react";

function ListGroup() {
//   const items: any[] = [];
  const items = ["New York", "London", "Tokyo", "San Francisco", "Paris"];
  const list_condition = items.length === 0 && <p>No item found</p>
  const handleClick = (event:MouseEvent) => console.log(event);


  return (
      <>
      <h1>List</h1>
      {list_condition}
      <ul className="list-group">
        {items.map((item, id) => (
        
          <li className="list-group-item" key={id} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
