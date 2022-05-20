import "./Styles/App.css";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={((<Header />), (<HomeScreen />))} />
      </Routes>
    </div>
  );
}

export default App;
