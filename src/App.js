
import { Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import "./styles/styles.css"
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";


function App() {
    return (
    
    // function copiedNotification(msg, duration){

    //   var notification = document.createElement("div");
    //   notification.setAttribute("class", "copy-popup");
    //   notification.innerHTML = msg;
    //   setTimeout(function(){
    //       notification.parentNode.removeChild(notification);
    //       console.log("remove child")
    //   },duration);

    //   document.body.appendChild(notification);
    // }

    // function copyFunction() {
    //     navigator.clipboard.writeText("matthewrwalloch+Hire@gmail.com");
    //     copiedNotification("Email copied to Clipboard!", 2000);
    // }
    
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


