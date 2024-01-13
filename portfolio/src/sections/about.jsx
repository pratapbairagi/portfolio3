

const About = () => {
    return (
        <section className="container about_container" id="about">
            <h2 className="about_heading heading"> ABOUT </h2>
            <span className="about_subheading subheading"> OVERVIEW ABOUT </span>

            <div className="content grid about_grid">
                <div>
                    <div className="title">BIOGRAPHY</div>

                    <div className="data">
                        <p className="description">
                            Hi, I'm Pratap, Frontend Developer. Passionate about designing Beautiful web interfaces. Based in Delhi.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="title">PROJECTS</div>

                    <div className="data">
                        <h3 className="">
                            03
                        </h3>
                    </div>
                </div>

                <div>
                    <div className="title">SERVICES</div>

                    <div className="data">
                        <ul className="list">
                            <li>Web Design</li>
                            <li>Frontend</li>
                            <li>Backend</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="title">YEARS OF EXPERIENCE</div>

                    <div className="data">
                        <h3 className="">
                            01+
                        </h3>
                    </div>
                </div>

                <div>
                    <div className="title">SKILLS</div>
                    <div className="data">
                        <ul className="list">
                            <li>HTML, CSS & JavaScript</li>
                            <li>ReactJs & Bootstrap</li>
                            <li>NodeJs, Express & MongoDB</li>
                            <li>Git && Figma</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="title">COMPANIES WORKED</div>

                    <div className="data">
                        <h3 className="">
                            01
                        </h3>
                    </div>
                </div>

            </div>
        </section>
    )
};

export default About;