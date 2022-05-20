import "./Styles/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import CheckoutScreen from "./Screens/CheckoutScreen";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/checkout" element={<CheckoutScreen />} />
      </Routes>
    </div>
  );
}

export default App;
