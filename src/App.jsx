import "./Styles/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import CheckoutScreen from "./Screens/CheckoutScreen";
import LoginScreen from "./Screens/LoginScreen";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <div className="app">
          <Header />
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="/checkout" element={<CheckoutScreen />} />
          </Routes>
        </div>
      ) : (
        <LoginScreen />
      )}
    </>
  );
}

export default App;
