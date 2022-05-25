import "./Styles/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import CheckoutScreen from "./Screens/CheckoutScreen";
import LoginScreen from "./Screens/LoginScreen";
import { useState, useEffect } from "react";
import { auth } from "./Firebase/firebase";
import { useStateValue } from "./ContextAPI/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Will Only runs once when the app components load...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // The User Logged In
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The User Is Logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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
        <LoginScreen success={setIsAuthenticated} />
      )}
    </>
  );
}

export default App;
