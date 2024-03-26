import logo from "./logo.svg";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

function App() {
  return (
    <div>
      <main className="container">
        <Counters />
      </main>
    </div>
  );
}

export default App;
