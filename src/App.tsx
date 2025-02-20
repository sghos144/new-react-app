import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup";

function App() {
  // const items = ["New York", "London", "Tokyo", "San Francisco", "Paris"];

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={(item) => console.log(item)}
      ></ListGroup> */}
      <Alert> 
        Hello <span> World </span>
      </Alert>
    </div>
  );
}

export default App;
