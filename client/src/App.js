import "./App.css";
import Home from "./Pages/Home";
import "react-notifications-component/dist/theme.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import { ReactNotifications } from "react-notifications-component";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <ReactNotifications />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/file-directories" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
