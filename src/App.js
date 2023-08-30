
import { Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import "./styles/styles.css"
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import DeployedAppsPage from "./pages/DeployedAppsPage";


function App() {
    return (
        <div >
            <header className="counter-nav"></header>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/apps" element={<DeployedAppsPage />}/>
                <Route path="/projects" element={<ProjectsPage />}/>
            </Routes>
        </div>
    );
}

export default App;


