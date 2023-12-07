import { Route, Routes } from "react-router-dom";

import "./App.css";
import AddUser from "./components/AddUser";
import Header from "./components/Header";
import Home from "./components/Home";
import ModifyUser from "./components/ModifyUser";
import RemoveUser from "./components/RemoveUser";
import ViewUsers from "./components/ViewUsers";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-users" element={<ViewUsers />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/modify-user" element={<ModifyUser />} />
        <Route path="/remove-user" element={<RemoveUser />} />
      </Routes>
    </div>
  );
}

export default App;
