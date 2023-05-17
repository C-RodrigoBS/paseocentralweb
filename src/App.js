import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Auth />} />

            <Route path="/Home" element={<Home />} />


          </Routes>
        </Router>

      </AuthProvider>
    </>
  );
}

export default App;
