import "./App.css";
import "./components/NavBar";
import LoginRegister from "./components/LoginRegister";
import NavBar from "./components/NavBar";
import Loader from "./components/Loader";

function App() {
  return (
    <div className="App">
      <div class="wapper">
        <Loader />
        <NavBar />
        <LoginRegister />
      </div>
    </div>
  );
}

export default App;
