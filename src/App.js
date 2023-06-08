//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './context/notes/NoteState';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useState } from 'react';
import Footer from './Components/Footer';
import Contact from './Components/Contact';




function App() {
  const [mode,setMode] =useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null)

    }, 1500)
  }


  const toggleMode = ()=>{
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor = '#0d3268';
      document.body.style.color = "#fd7e14";
      showAlert("Dark mode is enabled" , "success");
      document.title="Dark mode";
    
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = "black";
      showAlert("light mode is enabled" , "success");
      document.title="light mode";

      }
  }
  
  return (
    <div className='w-100 overflow-hidden'>
      <NoteState>
        <Router>
          <Navbar   mode={mode} toggleMode = {toggleMode} />
          <Alert alert={alert} />
          <div className="container">

            <Switch>
              <Route exact path="/">
                <Home showAlert={showAlert} />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/login">
                <Login  showAlert={showAlert} />
              </Route>
              <Route exact path="/signup">
                <Signup showAlert={showAlert}  />
              </Route>

            </Switch>
          </div>
          <Footer />
        </Router>

      </NoteState>



    </div>
  );
}


export default App;
