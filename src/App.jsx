import "./Styles/App.css";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <div className="app">
      <Header />
      <HomeScreen /> {/* Header */} {/* Home */}
    </div>
  );
}

export default App;
