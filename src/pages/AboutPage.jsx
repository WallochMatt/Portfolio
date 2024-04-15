import { useState } from "react";
import Testimonial from "../components/Testimonial";

// import Masonry from "masonry-layout";





const AboutPage = (props) => {



    return ( 
        <main className="master-align">
            

            
            <div className="big-hello special-text">
                <h1 className="big-text">Hi! I'm Matt.</h1>
            </div>
     
            <div className="about">
                <div className="about-left">
                    <h1 className="special-text">I am a Fullstack Web Developer in Southeast Wisconsin</h1>
                    {/* Possibly separate these to appear as paragraphs and not one wall of text */}
                    <p>
                    My first interest in software came from video games. Not uncommon, I know, but I was captivated by virtual worlds. This fascination 
                    drove me to delve into what I'd eventually learn as logic gates and algorithms. Of course I wouldn't know the similarities until after 
                    I switched to computer science from art/animation.

                    Enrolling in devCodeCamp's Computer Science Engineering program provided me with a structured environment to channel my innate curiosity 
                    and blend the systematic rigor of programming with the creativity honed through years of artistic endeavors. Here, I merged my love for 
                    creativity with the precision of programming, cultivating a unique skill set that blends artistic flair with technical expertise.


                    Driven by a relentless hunger for knowledge and self-improvement, I continually seek opportunities to expand my skills and deepen my 
                    understanding of software development. My unique blend of artistic sensibility and technical acumen positions me as a versatile and 
                    innovative problem-solver, ready to tackle the challenges of modern software development with precision and dedication
                    </p>
                    {/* <div className="about-socials">
                        <span onClick={handleClick}  className="email">
                            matthewrwalloch+Hire@gmail.com <i className="fa-regular fa-copy"></i>
                        </span>
                        <ul className="about-icons">
                            <li className="badge">
                                <a href="https://github.com/WallochMatt?tab=repositories" target='blank'>
                                    <i title="My Github page" className="fa-brands fa-github github-badge" ></i>
                                </a>
                            </li>
                            <li className="badge">
                                <a href="https://www.linkedin.com/in/mwalloch/" target='blank'>
                                    <i title="My LinkedIn profile" className="fa-brands fa-linkedin linkedin-badge"></i>
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </div>   
                <div  className="about-right">
                    <div className="circle">
                        <div></div>
                    </div>
                </div>
            </div>




            <div className="testimonnials" >
                {/* <div style={{ width: `${maxCol}` }}> */}
                <div >
                    <Testimonial reference="
                        It was honestly quite hard for me to select my &quot;Relationship&quot; to Matt. Over the years, our connection has evolved and expanded; we've 
                        been classmates, colleagues, and most recently, I had the pleasure of introducing him to the world of coding.

                        At Discovery World, he reported directly to me. He proved himself to be a standout team player and the most consistent and 
                        reliable person on my team. His commitment to going the above and beyond not only made him a joy to work alongside but also
                        brought our team's overall efficiency and productivity to another level.

                        A memorable day that comes to mind is when we found ourselves shouldering the entire operation, just the two of us, where 
                        normally we would have a team of 4-6 (with an absolute bare minimum of 3). Despite the dire circumstances on top of an 
                        unusually busy day, we ran the operation smoothly and efficiently. I attribute this seamless day primarily to Matt's ability 
                        to step up and take charge, showing his true mettle under pressure. This should've been one of the hardest days of my career 
                        at Discovery World, but I actually think back on it fondly.

                        He may not have a traditional university education, but his strong analytical mind, firm grasp of logic, and latent ability far
                        outshine any conventional credential. Passing up on the chance to cultivate his limitless potential would be a seriously 
                        missed opportunity.

                        I wholeheartedly endorse Matt for his abilities and potential. I am always available to provide a more detailed reference if 
                        needed, should any doubt remain. Rest assured, he is a safe bet for any team.
                        "
                        photo="https://media.licdn.com/dms/image/C4E03AQFRV0VHNu0bNw/profile-displayphoto-shrink_100_100/0/1602827922127?e=1717632000&v=beta&t=SUkr55ePsvkrfG-KC1Kcf0jm65VX--FszMdPjMjMhks"
                        name="Christian Haliga"
                        position="Software Engineer II"
                        employer="Brady Corp."
                    
                    />

                    <Testimonial reference="Although Matthew and I didn't directly work together on a project, he was great to share a classroom with. He has 
                    shown his receptiveness to every topic and asking thoughtful questions. His capstone project shown his passion of programming along with 
                    sports. Matthew's capstone brought an aspect to the sport's world by allowing the audience to choose the victor, rather than the standard 
                    judge ruling. 

                    I believe Matthew will provide an excellent addition into any team by his professionalism, team work capabilities and knowledge gained 
                    from devCodeCamp.

                    "
                    photo="https://media.licdn.com/dms/image/D5603AQFTPvqlIZTuZQ/profile-displayphoto-shrink_100_100/0/1673462700780?e=1717632000&v=beta&t=SV3rrTk316VaDoPri7G-MeShEY3ZkBWYNkWBOpevIts"
                    name="Nik Matten"
                    position="Classmate"
                    employer="devCodeCamp"
                    />
                </div>

                <div>
                    <Testimonial reference="
                        Matthew has a real hunger for learning and software development. Time after time, he would finish his work early and reach out for 
                        more to continue building his knowledge on more concepts. His thoughtful questions lead to many great discussions. He has a great eye
                        for both frontend design and backend structure, which he showcased by building an impressive full-stack capstone project. 
                        Matthew also showed great compassion for his peers, and was an excellent collaborator. He would make a fantastic addition to any team!
                        "
                        photo="https://media.licdn.com/dms/image/D5635AQGYGIgl3opWyw/profile-framedphoto-shrink_100_100/0/1708378561539?e=1712786400&v=beta&t=mlI5_akKIr6TtTZ2u8zxAjiUcz6VB9qCnivk7LJGcgM"
                        name="Brett Johnson"
                        position="Instructor"
                        employer="devCodeCamp(Formely)"
                    
                    />


                    <Testimonial reference="Matthew and I worked well together on a &quot;paired-project&quot; early in the course. We each brought a lot of 
                    ideas to the table and incorporated the best ones into our finished solution. 

                    Matthew demonstrated advanced coding skill from early on. His Capstone did not disappoint. His project had some unique styling that I had 
                    not seen in any other project. The concept was original and entertaining and the execution was on-point. 

                    I am not only a classmate of Matt, but a fan. I look forward to downloading his finished projects as they are released to market in the 
                    future.

                    "
                    photo="https://media.licdn.com/dms/image/C4D03AQE9SpGSXg1ldA/profile-displayphoto-shrink_200_200/0/1581354103370?e=1717632000&v=beta&t=CeHtTxIoDCqQ8CJAPmMFHA9_lcfZlb2Nb6TDr6XJ-FI"
                    name="Michael J. Thompson"
                    position="Website Specialist"
                    employer="Fisher Investments"
                    />

                    <Testimonial reference="Mathew was a fantastic classmate at devCodeCamp. He brought an intense focus and dedication to every new topic 
                    covered in class, often asking questions that other students might not have considered. He demonstrated from the start of the course to
                    the final capstone project that he was ready to not only learn, but execute. He is without a doubt ready and able for everything his 
                    career will throw at him!
                    "
                    photo="https://media.licdn.com/dms/image/D5603AQEA3XXhrk7B2Q/profile-displayphoto-shrink_100_100/0/1673372739721?e=1717632000&v=beta&t=ixMH5uJW9QH-ZJFUJHI3WoqTAfR3-7ArWlQtj1Pks2o"
                    name="Evan Voeltner"
                    position="Classmate"
                    employer="devCodeCamp"
                    />



                    <Testimonial reference="Matthew and I worked on a few projects together at devCodeCamp and it was always a pleasure. During our projects 
                    we would constantly switch off on who was coding and who was helping to refine our paired programming skills. We approached every problem 
                    with a learning attitude and it helped us create projects that we are very proud of and have a high technical degree for our level. I 
                    would recommend Matthew for any company as he is a fast learner and is very dedicated to his work.
                    "
                    photo="https://media.licdn.com/dms/image/D4E35AQH1QGsHa6OGwA/profile-framedphoto-shrink_100_100/0/1663096662743?e=1712876400&v=beta&t=3t2gzMYkZApmh-IjJynMHoqPJFFZ6wH7YkPzByNR630"
                    name="Arturo Diaz"
                    position="Classmate"
                    employer="devCodeCamp"
                    />
                </div>
            </div>



            <div className="more-info">
                <h1 className="special-text"> 
                    Let's collaborate if you're committed to sustainability and fostering continuous learning.
                </h1>
                <p>
                    I prioritize practical skills, bringing a fresh perspective and a commitment to growth. If you're looking 
                    for someone adaptable and driven, let's connect!

                    <span onClick={props.handleClick}  className="email">
                        <i className="fa-solid fa-envelope" style= {{color: "#ffffff;" }}></i>
                    </span>
                </p>
            </div>
            {/*  over traditional education */}


            <div className="grid">
                <div className="grid-item">
                    <h3 className="grid-num">1</h3>
                    <h3 className="special-text">Plan It Out</h3>
                    <p>I define project goals and requirements, creating mockups to visualize layout and functionality. As well as establish a clear timeline and roadmap for development.</p>
                </div>
                <div className="grid-item">
                    <h3 className="grid-num">2</h3>
                    <h3 className="special-text">Get It Working</h3>
                    <p>I focus on developing the core functionality and ensuring the application works as intended. I conduct surface-level testing to ensure basic functionality and identify any immediate issues.</p>
                </div>
                <div className="grid-item">
                    <h3 className="grid-num">3</h3>
                    <h3 className="special-text">Make It Pretty</h3>
                    <p>I enhance the user interface and design elements to improve the overall user experience. I pay attention not only to visual aesthetics but also to the organization and readability of my code.</p>
                </div>
                <div className="grid-item">
                    <h3 className="grid-num">4</h3>
                    <h3 className="special-text">Always Be Improving</h3>
                    <p>I then continuously iterate and refine the application, adding new features, optimizing performance, and addressing user feedback.</p>
                </div>
            </div>

            <footer></footer>

        </main>
    );
}

export default AboutPage;


{/* <Testimonial reference="
                
"
photo=""
name=""
position=""
employer=""
/> */}