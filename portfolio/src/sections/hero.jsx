import { memo } from "react";
import Button from "../copmonents/button/button";


const Hero = () => {
    return (
        <section className="container hero_container" id="home">
            <div className="hero_circles">
                <span> <i className="ri-customer-service-2-line"></i> </span>
                <span> <i className="ri-computer-line"></i> </span>
                <span> <i className="ri-keyboard-line"></i> </span>
                <span> <i className="ri-chat-3-line"></i> </span>
                <span> <i className="ri-suitcase-line"></i> </span>
                <span> <i className="ri-article-line"></i> </span>
                <span> <i className="ri-quill-pen-line"></i> </span>
            </div>
            <div className="grid">

                <div className="content hero_content hero_content_design">
                    <div className="big_arrow_left">
                    <i className="ri-link"></i>
                        <span>PORTFOLIO</span>
                    </div>
                    <div className="circle">
                        <div className="image_circle">
                            <img src="./asset/bohemian-man-with-his-arms-crossed-removebg-preview.png" style={{width:"120%", position:"absolute", left:"-7%", bottom:"10px", borderBottomLeftRadius:"90px", borderBottomRightRadius:"100px"}} alt="" />
                        </div>
                    </div>
                    <div className="big_arrow_right">
                        <i className="ri-link"></i>
                       <span>RESUME</span> 
                    </div>
                    <div className="hero_shadow"></div>
                </div>

                <div className="content hero_content hero_content_info">
                        <div>
                            <div className="hero_greeting"> Hello there </div>
                            <div className="hero_heading">
                                <span>I'm</span>
                                <p>Pratap Bairagi</p>
                            </div>
                            <div className="hero_info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate velit tempora vero ipsum, nulla quasi ad ipsam necessitatibus. Recusandae aliquam minus aspernatur id. Quaerat tempore magnam quas sequi nam ex!</div>
                            <div className="hero_buttons">
                                <Button styleClass="hero_button" buttonText={"Portfolio"}/>
                                <Button styleClass="hero_button" buttonText={"Resume"}/>
                            </div>
                        </div>
                </div>

            </div>
        </section>
    )
};

export default memo(Hero);