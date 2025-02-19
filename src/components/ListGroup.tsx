function ListGroup() {
  const items: any[] = [];
//   const items = ["New York", "London", "Tokyo", "San Francisco", "Paris"];
  const list_condition = items.length === 0 ? <p>No item found</p> : null
  return (
    <>
      <h1>List</h1>
      {list_condition}
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          {items[0]}
        </li>
        {items.slice(1).map((item, id) => (
          <li className="list-group-item" key={id}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
