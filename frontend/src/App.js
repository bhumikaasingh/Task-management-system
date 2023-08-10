import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";



function App() {

  return (
    <>
        <BrowserRouter>
        <Navbar/>
      <Routes>
        
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Main />} />
          <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
