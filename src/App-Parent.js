import "./App.css";
import Parent from "./components/Parent/Parent";
import Child from "./components/Parent/Child";
import Child2 from "./components/Parent/Child2";
import Child3 from "./components/Parent/Child3";

function App() {
  return (
    <div className="App">
      <Parent>
        <h1>Good Morning Class</h1>
        <div>LOL</div>
        {/* whatever is between component tags === children, which is part of props obj. */}
        <Child />
        <Child2 />
        <Child3 />
      </Parent>
    </div>
  );
}

export default App;
