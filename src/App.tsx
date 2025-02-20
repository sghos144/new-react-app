import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "London", "Tokyo", "San Francisco", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="Cities"></ListGroup>
    </div>
  );
}

export default App;
