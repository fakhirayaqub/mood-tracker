import "./App.css";
import Collapsible from "./components/Collapsible";
import Header from "./components/Header"
import Navigation from "./components/Navigation"
function App() {
  return (
    <div className="App">
      <Header/>
        <Collapsible />
        <Navigation/>
      </div>
  
  );
}

export default App;
