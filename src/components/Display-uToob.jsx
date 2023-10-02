import { Link } from "react-router-dom";

const DisplayUToob = () => {
    return ( 
        <div className="project">
            <h2>uToob - A YouTube Parallel</h2>
        
            <div className="prj-info">
                <div>
                    <div className="img-background">
                        <img src={require("../assets/uToob-example-1.png")}></img>
                    </div>

                    <div className="separator"></div>

                    <div className="img-background">
                        <img src={require("../assets/uToob-example-2.png")}></img>
                    </div>
                </div>

                <div>
                    <ul className="link-list">
                        <li>
                            <Link href="" target="_blank">
                                CURRENTLY OFFLINE <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </Link>
                            &emsp;
                        </li>
                        <li>
                            <Link to="https://github.com/WallochMatt/YTclone" target="_blank">
                                Repository <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </Link>
                            &emsp;
                        </li>
                    </ul>

                    <p>
                        Creating a rich and interactive video comment and playback system is a multifaceted task. User stories serve as our guiding light, 
                        helping us shape an application that not only meets the needs of our users but also offers a seamless and engaging experience. 
                        Let's explore the key user stories that kept my partner and I focused on during the development of this application.
                    </p>
                    <p>
                        In the foundation of our application, we prioritize the creation of data models. The Comment and Reply models form the backbone 
                        of our comment and reply system, enabling users to engage in meaningful conversations around videos.
                    </p>
                    <p>
                        Efficiently retrieving comments and replies is paramount. These GET endpoints ensure that users can access and engage with 
                        discussions related to specific videos and comments while maintaining a smooth user experience.
                    </p>
                    <p>
                        Enabling users to contribute to the conversation is essential. These POST endpoints allow registered users to post comments and 
                        replies, fostering community engagement around videos
                    </p>
                    <p>
                        The ability to edit comments enhances user interaction. This PUT endpoint ensures that users can modify their comments while 
                        maintaining the integrity of the conversation.
                    </p>
                    <p>
                        Our application aims to provide a comprehensive video-watching experience. These user stories emphasize the integration with 
                        the YouTube API, enabling users to search for and play videos, access video details, and explore related content seamlessly.
                    </p>
                    <p>
                    Fostering user engagement and interaction is at the core of our project. Registered users can actively participate in discussions by 
                    adding comments, expressing their preferences through likes and dislikes, and engaging in meaningful conversations by replying to 
                    comments.
                    </p>
                    <p>
                        We are dedicated to providing a platform that not only enhances the user's video-watching experience but also fosters a vibrant 
                        and engaging community around shared interests.
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

export default DisplayUToob;
