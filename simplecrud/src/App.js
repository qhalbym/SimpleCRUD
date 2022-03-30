import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/Home";
import NavBar from "./components/navbar";
import FormPage from "./views/Form";

function App() {
  return (
    <div className="App h-screen grid grid-cols-5">
      <NavBar></NavBar>
      <div className="h-full col-span-3">
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/add" element={<FormPage></FormPage>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
