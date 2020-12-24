
import './App.css';
import { Button, Slider } from 'antd';
import IconSlider from "./components/IconSlider"
import Collapsible from "./components/Collapsible"

function App() {
  return (
    <div className="App">
     
      <IconSlider max={10}  />
      <Collapsible/>
  
      
    </div>
  );
}

export default App;
