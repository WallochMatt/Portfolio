import { Link } from "react-router-dom";

const DisplayComCon = () => {
    return ( 
        <div className="project">
            <h2>Combat Consensus - A scoring consensus application for combat sports</h2>
            
            <div className="prj-info">
                <div>
                    <div className="img-background">
                        <img src={require("../assets/CC-example-1.png")}></img>   
                    </div>  

                    <div className="separator"></div>

                    <div className="img-background">  
                        <img src={require("../assets/CC-example-3.png")}></img>
                    </div>
                </div>
        
                <div>
                    <ul className="link-list">
                        <li>
                            <Link to="http://52.15.152.115/" target="_blank">
                                View Site <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </Link>
                            &emsp;
                        </li>
                        <li>
                            <Link to="https://github.com/WallochMatt/CombatConsensus-Capstone" target="_blank">
                                Repository <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </Link>
                            &emsp;
                        </li>
                        <li>
                            <Link to="https://www.youtube.com/watch?v=fEtIASFDeNY" target="_blank">
                                Walkthrough <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </Link>
                            &emsp;
                        </li>
                    </ul>
                    
                    <p>
                        This app is designed with all you fight fans in mind, and it brings together the thrill of live fight events with a fan scoring 
                        system that allows said fans to engage more deeply with the action. Now, a brief overview of the user stories that drove this application. 
                        These stories capture the essence of what I wanted to achieve and the experiences I aimed to provide!
                    </p>
                    <p>
                        As a fight fan, you can post your scoring of a fight per round using a dropdown window to submit a score. This feature helps
                        keep the data clean, preventing impossible scores. Additionally, you'll have dedicated fields for each fighter, ensuring a
                        detailed and easy to follow scoring experience.
                    </p>
                    <p>
                        Ever wondered how your scoring compares to other fans? Our app allows you to see the average score across all fans for a particular
                        fight. It's a great way to gauge the consensus of the fanbase and gain insights into how the majority of fans perceive the outcome.
                        Our app allows you to view a collection of scores made by users, including yourself. It's a great way to reflect on your scoring journey.
                    </p>
                    <p>
                        Wondering how accurate your scoring is? As a fight fan, you can view your accuracy percentage by comparing your scores to the official
                        scores. It's a great way to assess the precision of your judgments.
                    </p>
                    <p>
                        Additionally, as a fight fan, you can discover who the highest scoring fighter is among fans or officially by the judges.
                    </p>
                    <p>
                        When it comes to events, we've got you covered. You can choose an event and see all the data on an easy-to-understand table. 
                        This includes scheduled matches, fighters, fan scores, and official scores. It's your one-stop-shop for all your event information needs.
                    </p>
                    <p>
                        For admins, we offer powerful capabilities. You can create and maintain events, matches, and fighter data with full CRUD functionality. 
                        It gives you complete control over the app's content. Lastly, as a developer, I prioritized quality. I thoroughly React 
                        components' functionality using Cypress to ensure a seamless and bug-free experience for users.
                    </p>
                    
                    <h3>Tech Stack:</h3>
                    <ul className="frame-tech">
                        <li>
                            <i title="Python" className="fa-brands fa-python custom-fa python-badge"></i>
                        </li>
                        <li>
                            <i title="React" className="fa-brands fa-react custom-fa react-badge"></i>
                        </li>
                        <li>
                        <i title="Docker" className="fa-brands fa-docker custom-fa docker-badge"></i>
                        </li>
                        <li>
                            <i title="Amazon Web Services" className="fa-brands fa-aws custom-fa aws-badge"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DisplayComCon;
