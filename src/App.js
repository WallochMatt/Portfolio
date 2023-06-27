import React, { useState } from 'react';
import Navbar from './components/NavBar';
import "./styles/styles.css"
// Break these into components

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
      <Navbar />
      <main className="master-align">
        <header className="counter-nav"></header>
        
        

        <section className="spaced-row">
            <div>
                <h1 id="jump_home">Matthew Walloch</h1>
                <p>Full-Stack Web Developer</p>
                <p>"Why do programmers use dark mode? It keeps the bugs away."</p>
            </div>
            <div className="portrait"></div>
        </section>


        <section>
            <h2 id="jump_about">ABOUT ME</h2>
            <hr></hr>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt eget nullam non. Arcu bibendum at varius vel pharetra. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Pulvinar sapien et ligula ullamcorper malesuada. Faucibus turpis in eu mi bibendum. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Commodo quis imperdiet massa tincidunt nunc pulvinar. Nisi vitae suscipit tellus mauris a. Ultrices tincidunt arcu non sodales neque sodales ut. Rutrum tellus pellentesque eu tincidunt. Purus semper eget duis at tellus. Malesuada fames ac turpis egestas maecenas. Sit amet est placerat in egestas erat.

                Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Augue neque gravida in fermentum et sollicitudin. Cras ornare arcu dui vivamus arcu felis. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Orci ac auctor augue mauris augue. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Ipsum consequat nisl vel pretium. Eros donec ac odio tempor orci dapibus ultrices. Tempor orci eu lobortis elementum nibh tellus molestie. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Pellentesque elit eget gravida cum sociis natoque penatibus et. Ornare lectus sit amet est placerat in egestas erat imperdiet. Sit amet purus gravida quis blandit turpis cursus. Tristique senectus et netus et. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo.
                
                Massa eget egestas purus viverra accumsan in. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Habitant morbi tristique senectus et netus et malesuada fames ac. Nisl suscipit adipiscing bibendum est. Senectus et netus et malesuada fames. Velit sed ullamcorper morbi tincidunt ornare. Sagittis nisl rhoncus mattis rhoncus urna neque. Accumsan sit amet nulla facilisi morbi. Euismod lacinia at quis risus sed vulputate odio. Tortor condimentum lacinia quis vel. Varius sit amet mattis vulputate. In ornare quam viverra orci sagittis eu volutpat odio. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Quis varius quam quisque id diam vel. Viverra vitae congue eu consequat ac felis. Etiam non quam lacus suspendisse. In iaculis nunc sed augue lacus viverra. In fermentum posuere urna nec tincidunt praesent semper. Sagittis orci a scelerisque purus semper eget.</p>
        </section>


        <section>
            <h2 id="jump_projects">PROJECTS</h2>
            <hr></hr>

            <div className="project">
                <h3>Combat Consensus - A scoring consensus application for combat sports</h3>
                
                <div className="prj-info">
                  <div>
                    <a href="http://3.143.230.10/" target="_blank">
                        <img src="assets/CC-example-1.png"></img>
                        
                    </a>

                    <a href="https://www.youtube.com/watch?v=fEtIASFDeNY" target="_blank">
                        <div className="youtube-background">
                            <img src="assets/CC-example-3.png"></img>
                            <div className="youtube-icon">
                                <i className="fa-brands fa-youtube fa-4x fa-beat" style={{color: "#ff0000"}}></i>
                            </div>
                        </div>
                    </a>
                  </div>
  
                  <div>
                    <p>Example text
                        This example would have psuedo technical documentaion. A more in depth article about the project
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt eget nullam non. Arcu bibendum at varius vel pharetra. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Pulvinar sapien et ligula ullamcorper malesuada. Faucibus turpis in eu mi bibendum. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Commodo quis imperdiet massa tincidunt nunc pulvinar. Nisi vitae suscipit tellus mauris a. Ultrices tincidunt arcu non sodales neque sodales ut. Rutrum tellus pellentesque eu tincidunt. Purus semper eget duis at tellus. Malesuada fames ac turpis egestas maecenas. Sit amet est placerat in egestas erat.

                        Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Augue neque gravida in fermentum et sollicitudin. Cras ornare arcu dui vivamus arcu felis. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Orci ac auctor augue mauris augue. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Ipsum consequat nisl vel pretium. Eros donec ac odio tempor orci dapibus ultrices. Tempor orci eu lobortis elementum nibh tellus molestie. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Pellentesque elit eget gravida cum sociis natoque penatibus et. Ornare lectus sit amet est placerat in egestas erat imperdiet. Sit amet purus gravida quis blandit turpis cursus. Tristique senectus et netus et. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo.
                        
                        Massa eget egestas purus viverra accumsan in.
                    </p>
                  </div>
                </div>
            </div>

            <div className="spacer"></div>

            <div className="project">
              <h3>CaraCara - An eCommerce Site</h3>

              <div className="prj-info">
                <div>
                    <a href="http://18.119.156.5/index.html#home_jump" target="_blank">
                        <img src="assets/CaraCara-example-2.png"></img>
                        <img src="assets/CaraCara-example-3.png"></img>
                    </a>
                </div>

                <div>
                    <p>Example text of an explaination for the project, same infor as the lorem ispum above simulates</p>
                </div>    
              </div>
            </div>

            <div className="spacer"></div>

            <div className="project">
            <h3>uToob - A YouTube Parallel</h3>
                <div className="prj-info">
                    <div>
                        <a href="http://18.222.171.6/" target="_blank">
                            <img src="assets/uToob-example-1.png"></img>
                            <img src="assets/uToob-example-2.png"></img>
                        </a>
                    </div>
                    <div>
                        <p>Example text of an explaination for the project, same infor as the lorem ispum above simulates</p>
                    </div>    
                </div>      
            </div>
        </section>

        <section>
            <h2 id="jump_contact">CONTACT</h2>
            <hr></hr>
          
            {/* onClick={copyFunction()} */}
            <p>Please contact me via email with a subject line of "Job"<span style={{cursor: "pointer"}}  className="fa-solid fa-copy fa-bounce"></span></p>
            
            <div className="icon-section">
                <a href="https://www.linkedin.com/in/mwalloch/" target="_blank">
                    <i className="fa-brands fa-linkedin fa-5x" style={{color: "#5286e0"}}></i>
                </a>
                <a href="https://github.com/WallochMatt" target="_blank">
                    <i className="fa-brands fa-github fa-5x" style={{color: "#ffffff"}}></i>
                </a>
                
            </div>
        </section>
      </main>
    </div>
  );
}

export default App;
