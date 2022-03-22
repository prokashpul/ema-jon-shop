import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Shop></Shop>
      </main>
    </div>
  );
}

export default App;
