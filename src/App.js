import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
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
                    </div>
                </nav>
                <Routes>
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
