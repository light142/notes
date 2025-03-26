import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.css"; // Importing styles for the whole app

function App() {
    return (
        <Router>
            <div className="app-container">
                <nav className="navbar">
                    <h1 className="app-title">Notes</h1>
                    <div className="nav-links">
                        <Link to="/register" className="nav-link">
                            Register
                        </Link>
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
