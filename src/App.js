import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("primary");
  const [enableModeTxt, setEnableModeTxt] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (
      mode === "primary" ||
      mode === "danger" ||
      mode === "warning" ||
      mode === "success" ||
      mode === "info" ||
      mode === "primaty dark"
    ) {
      console.log("run");
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setEnableModeTxt("Disable Dark Mode");
      showAlert("Dark mode has been enabled", "success");
      // ----- It just for blink title ----
      // setInterval(() => {
      //   document.title="TextUtil is very amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextUtil"
      // }, 1500);
    } else {
      setMode("primary");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setEnableModeTxt("Enable Dark Mode");
      showAlert("Dark mode has been disabled", "success");
    }
  };

  const red = () => {
    setMode("danger");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    setEnableModeTxt("Enable Dark Mode");
    showAlert("Red Dark mode has been enabled", "success");
  };
  const yellow = () => {
    setMode("warning");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    setEnableModeTxt("Enable Dark Mode");
    showAlert("Yellow Dark mode has been enabled", "success");
  };
  const green = () => {
    setMode("success");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    setEnableModeTxt("Enable Dark Mode");
    showAlert("Green Dark mode has been enabled", "success");
  };
  const skyblue = () => {
    setMode("info");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    setEnableModeTxt("Enable Dark Mode");
    showAlert("Skyblue Dark mode has been enabled", "success");
  };
  const blue = () => {
    setMode("primary dark");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    setEnableModeTxt("Enable Dark Mode");
    showAlert("blur Dark mode has been enabled", "success");
  };

  return (
    <>
     {/* <Router> */}
      <Navbar
        title="TextUtils"
        mode={mode}
        enableModeTxt={enableModeTxt}
        toggleMode={toggleMode}
        red={red}
        yellow={yellow}
        green={green}
        skyblue={skyblue}
        blue={blue}
      />
      <Alert alert={alert} />
      {/* <Routes> */}
      {/* <Route exact path="/about" element={<About mode={mode} />} /> */}
      {/* <Route exact path="/" element={ */}
      <TextForm
            heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
            showAlert={showAlert}
            mode={mode}
          />
          {/* } /> */}
        
      {/* </Routes> */}
    {/* </Router> */}
    </>
  );
}

export default App;
