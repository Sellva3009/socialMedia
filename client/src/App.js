import { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";


function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" Component={user ? Home : Login} />
        <Route path="/login" Component={user ? <Navigate to="/" /> : Login} />
        <Route
          path="/register"
          Component={user ? <Navigate to="/" /> : Register}
         />
        <Route path="/profile/:username" Component={Profile} />
      </Routes>
    </Router>
  );
}

export default App;
