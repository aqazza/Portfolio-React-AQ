import "./App.css";
import MyRepetitiveCard from "./components/card";

function App() {
  const array = [1, 2, 3];
  return (
    <div className="App">
      {array.map((item) => {
        console.log("test");
        return <MyRepetitiveCard />;
      })}
    </div>
  );
}

export default App;
