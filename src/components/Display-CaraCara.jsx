import { Link } from "react-router-dom";

const DisplayCaraCara = () => {
    return ( 
        <div className="project">
            <h2>CaraCara - An eCommerce Site</h2>
    
            <div className="prj-info">
                <div>
                    <div className="img-background">
                        <img src={require("../assets/CaraCara-example-2.png")}></img>
                    </div>

                    <div className="separator"></div>
                    
                    <div className="img-background">
                        <img src={require("../assets/CaraCara-example-3.png")}></img>
                    </div>
                </div>
    
                <div>
                    <ul className="link-list">
                        <li>
                            <Link to="https://caracara.azurewebsites.net/" target="_blank">
                                View Site <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </Link>
                            &emsp;
                        </li>
                        <li>
                            <Link to="https://github.com/WallochMatt/eCommerce-Site" target="_blank">
                                Repository <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </Link>
                            &emsp;
                        </li>
                    </ul>
                    <p>
                        In today's fast-paced digital world, web development is a dynamic and collaborative process. It is essential to have a clear set of 
                        user stories that define our objectives and goals. In this project, the goal was to take a given wireframe of an eCommerce site,
                        and recreate it as closely as possible.
                    </p>
                    <p>
                        The primary goal is to bring the designer's vision to life. I wanted to adhere meticulously to the UX designer's prototype to 
                        ensure that the final product matches the user-tested design. This commitment to design integrity is essential in delivering a 
                        seamless and visually appealing user experience.
                    </p>
                    <p>
                        Navigation is at the heart of user experience. An important objective was to build navigable sections for "home," "products," "about," 
                        and "contact." These sections feature clickable links, providing users with easy access to the information they seek. 
                        This user-centric approach enhances usability and ensures that visitors can find what they need quickly.
                    </p>
                    <p>
                        To streamline the design and maintain consistency across the website and future pages, 
                        we were to implement an external CSS stylesheet. This stylesheet required a minimum of 10 rules, offering a set of 
                        predefined styles that can be applied consistently throughout our site.
                    </p>
                    <p>
                        Design quality matters. To maintain design integrity, our instructors were committed to including high-quality images 
                        and provided them in an assets file to use for this site. These images will ensure that our web pages align with the meticulously 
                        crafted design and visuals, creating a visually stunning user experience.
                    </p>
                    <p>
                        Engagement is central to user satisfaction. We aim to enhance the user experience by making each product "card" interactive. 
                        Achieving this involves wrapping these cards in anchor elements, allowing users to click on them for more information or 
                        relevant actions. 
                    </p>
                    <p>
                        In today's multi-device world, user experience extends to various platforms. We aimed to make our web pages mobile responsive by 
                        utilizing media queries. This ensures that users can have an effective and enjoyable experience on any platform, including 
                        desktops, laptops, tablets, and mobile devices.
                    </p>
                    <p>
                        To provide comprehensive information, I have one product page, in a separate HTML file as a proof of concept. These pages will 
                        allow users to learn more about specific products in detail, catering to their specific interests and information needs.
                    </p>
                    <h3>Tech Stack:</h3>
                    <ul className="frame-tech">
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

export default DisplayCaraCara;
