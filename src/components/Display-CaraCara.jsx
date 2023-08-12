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
                            <Link to="http://18.119.156.5/index.html#home_jump" target="_blank">
                                View Site <i class="fa-solid fa-arrow-right right" style={{color: '#ffffff'}}></i>
                            </Link>
                            &emsp;
                        </li>
                        <li>
                            <Link to="https://github.com/WallochMatt/eCommerce-Site" target="_blank">
                                Repository<i class="fa-solid fa-arrow-right right" style={{color: '#ffffff'}}></i>
                            </Link>
                            &emsp;
                        </li>
                    </ul>
                    <p>Example text
                            This example would have psuedo technical documentaion. A more in depth article about the project
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt eget nullam non. Arcu bibendum at varius vel pharetra. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Pulvinar sapien et ligula ullamcorper malesuada. Faucibus turpis in eu mi bibendum. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Commodo quis imperdiet massa tincidunt nunc pulvinar. Nisi vitae suscipit tellus mauris a. Ultrices tincidunt arcu non sodales neque sodales ut. Rutrum tellus pellentesque eu tincidunt. Purus semper eget duis at tellus. Malesuada fames ac turpis egestas maecenas. Sit amet est placerat in egestas erat.

                        Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Augue neque gravida in fermentum et sollicitudin. Cras ornare arcu dui vivamus arcu felis. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Orci ac auctor augue mauris augue. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Ipsum consequat nisl vel pretium. Eros donec ac odio tempor orci dapibus ultrices. Tempor orci eu lobortis elementum nibh tellus molestie. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Pellentesque elit eget gravida cum sociis natoque penatibus et. Ornare lectus sit amet est placerat in egestas erat imperdiet. Sit amet purus gravida quis blandit turpis cursus. Tristique senectus et netus et. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo.
                        
                        Massa eget egestas purus viverra accumsan in.
                    </p>
                    <h3>Tech Stack:</h3>
                    <ul className="frame-tech">
                        <li>
                            <i class="fa-brands fa-docker custom-fa docker-badge"></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-aws custom-fa aws-badge"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DisplayCaraCara;