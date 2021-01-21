
import './App.css';
import Home from './components/Home'

//import {Button} from "reactstrap";
import {ToastContainer, toast} from "react-toastify";
import About from './components/About';
import ViewCv from './components/ViewCv'

function App() {

  return (
    <div>
     
    <Home/>
    <About/>
    <ViewCv/>
   
    </div>
  );
}

export default App;
