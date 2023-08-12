
import { Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import "./styles/styles.css"
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";


function App() {
    return (
        <div >
            <header className="counter-nav"></header>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/projects" element={<ProjectsPage />}/>
                <Route path="/about" element={<AboutPage />}/>
            </Routes>
        </div>
    );
}

export default App;


