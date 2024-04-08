import { useState } from "react";
import Testimonial from "../components/Testimonial";

import Masonry from "masonry-layout";





const AboutPage = () => {

    // var colWidth = 40;
    // var maxCol = colWidth * 4;

    // var msnry = new Masonry( '.testimonnials', {
    //     // options
    //     itemSelector: '.recommends',
    //     columnWidth: colWidth,
    //     fitWidth: true,
    //     gutter: 0,
    // });

    const [copiedBlurb, setCopiedBlurb] = useState(['']);
    
    const spawnCopiedBlurb = () => {
        return(
            <div className="copy-popup">
                My email has been copied, I look forward to hearing from you!
            </div>
        );
    };
    
    const handleClick=()=>{
        navigator.clipboard.writeText("matthewrwalloch+Hire@gmail.com");
        setCopiedBlurb(spawnCopiedBlurb());
        const timer =  setTimeout(() => {
            setCopiedBlurb('')
        }, 2500)
        return () => clearTimeout(timer);
    };

    const [readMore, setReadMore] = useState([]);

    function handleButton(button) {
        switch (button) {
            case 0:
                setReadMore(
                    []
                );
                break;

            case 1:
                setReadMore(
                    <p>
                        I am driven by a dual passion for video games and art. I've always been captivated by the mechanics behind games and the creativity in art, which naturally led me to the world of software.
            
                        My journey to becoming a developer was solidified through devCodeCamp's Computer Science Engineering coding boot camp, where I graduated with distinction. I thrive on the challenge of turning imaginative ideas into functional, visually appealing applications.
            
                        What sets me apart is my insatiable appetite for learning. With each project, I strive to fuse technology and creativity to deliver seamless user experiences. I'm on a constant quest to stay updated with the latest industry trends, making sure my skills are always at the cutting edge.
                    </p>
                );
                break;
        };
    };

    function checkButton(readMore) {
        if (readMore.length !== 0) {
            return(
                <button className="read-button" onClick={() => handleButton(0)}>
                    Read Less
                </button>
            );
        }
        else{
            return(
                <button className="read-button" onClick={() => handleButton(1)}>
                    Read More
                </button>
            )
        };
    };



    return ( 
        <main className="master-align">
            
            <div>
                {copiedBlurb}
            </div>
            
            
            <div className="big-hello special-text">
                <h1 className="big-text">Hi! I'm Matt.</h1>
                {/* <h1 className="big-text">A Fullstack Web Developer.</h1> */}
            </div>


            <div className="about">
                <div className="about-left">
                    <h1 className="special-text">I am a Fullstack Web Developer in Southeast Wisconsin</h1>
                    <p>
                        I am driven by a dual passion for video games and art. I've always been captivated by the mechanics behind games and the creativity in art, which naturally led me to the world of software.

                        My journey to becoming a developer was solidified through devCodeCamp's Computer Science Engineering coding boot camp, where I graduated with distinction. I thrive on the challenge of turning imaginative ideas into functional, visually appealing applications.

                        What sets me apart is my insatiable appetite for learning. With each project, I strive to fuse technology and creativity to deliver seamless user experiences. I'm on a constant quest to stay updated with the latest industry trends, making sure my skills are always at the cutting edge.

                        In a nutshell, I'm Matthew Walloch—a passionate fullstack developer who found the perfect blend of inspiration in video games and art, and turned it into a career in software.
                    </p>
                    {/* <hr/> */}
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
                    I prioritize practical skills over traditional education, bringing a fresh perspective and a commitment to growth. If you're looking 
                    for someone adaptable and driven, let's connect!

                    <span onClick={handleClick}  className="email">
                        <i className="fa-solid fa-envelope" style= {{color: "#ffffff;" }}></i>
                    </span>
                </p>
            </div>


            <div className="grid">
                {/* Explain my dev process */}
                <div className="grid-item">
                    <h3 className="grid-num">1</h3>
                    <h3 className="special-text">Plan</h3>
                    <p>Lorem ipsum dolor sit amet,Enim ut tellus elementum sagittis. Nibh tortor id aliquet lectus proin nibh. Eget felis eget nunc lobortis mattis aliquam faucibus.</p>
                </div>
                <div className="grid-item">
                    <h3 className="grid-num">2</h3>
                    <h3 className="special-text">Step</h3>
                    <p>Lorem ipsum dolor sit amet,Enim ut tellus elementum sagittis. Nibh tortor id aliquet lectus proin nibh. Eget felis eget nunc lobortis mattis aliquam faucibus.</p>
                </div>
                <div className="grid-item">
                    <h3 className="grid-num">3</h3>
                    <h3 className="special-text">Step</h3>
                    <p>Lorem ipsum dolor sit amet,Enim ut tellus elementum sagittis. Nibh tortor id aliquet lectus proin nibh. Eget felis eget nunc lobortis mattis aliquam faucibus.</p>
                </div>
                <div className="grid-item">
                    <h3 className="grid-num">4</h3>
                    <h3 className="special-text">Step</h3>
                    <p>Lorem ipsum dolor sit amet,Enim ut tellus elementum sagittis. Nibh tortor id aliquet lectus proin nibh. Eget felis eget nunc lobortis mattis aliquam faucibus.</p>
                </div>
            </div>
        </main>
    );
};

export default AboutPage;


{/* <Testimonial reference="
                
"
photo=""
name=""
position=""
employer=""
/> */}