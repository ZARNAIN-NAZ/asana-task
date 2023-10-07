// import './App.css';
import { Image , DogCart } from "./DogCart"; 
// import  DogCart  ,{Image} from "./DogCart"; //bcz DogCart is export default in DogCart file
// import Image from "./Image";
function App() {
  return (
    <div className="App">
    <h1>hi</h1>
     <DogCart/>
     <Image/>
     {/* <DogCart/>
     <DogCart/> */}
    </div>
  );
}

export default App;
