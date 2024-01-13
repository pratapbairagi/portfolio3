

const Skills = () => {
    return (
        <section className="container skills_container" id="skills">
            <h2 className="heading">SKILLS</h2>
            <span className="subheading">IT & NON-IT</span>

            <div className="content grid skills_grid">
                <div>
                    <div className="title">IT SKILLS</div>

                    <div className="data">
                        <ul className="list">
                            <li>
                                <img src="./asset/html-1.svg" alt="" />
                                <span className="skill_title">HTML</span>
                                <span className="skill_level">Advance</span>
                            </li>

                            <li>
                                <img src="./asset/css-3.svg" alt="" />
                                <span className="skill_title">CSS</span>
                                <span className="skill_level">Advance</span>
                            </li>

                            <li>
                                <img src="./asset/javascript-1.svg" alt="" />
                                <span className="skill_title">JAVASCRIPT</span>
                                <span className="skill_level">Advance</span>
                            </li>

                            <li>
                                <img src="./asset/react-2.svg" alt="" />
                                <span className="skill_title">REACTJS</span>
                                <span className="skill_level">Advance</span>
                            </li>

                            <li>
                                <img src="./asset/nodejs-1.svg" alt="" />
                                <span className="skill_title">NODEJS</span>
                                <span className="skill_level">Basic</span>
                            </li>

                            <li>
                                <img src="./asset/mongodb-icon-2.svg" alt="" />
                                <span className="skill_title">MONGODB</span>
                                <span className="skill_level">Basic</span>
                            </li>

                            <li>
                                <img src="./asset/git-icon.svg" alt="" />
                                <span className="skill_title">GIT</span>
                                <span className="skill_level">Basic</span>
                            </li>

                            <li>
                                <img src="./asset/figma-5.svg" alt="" />
                                <span className="skill_title">FIGMA</span>
                                <span className="skill_level">Basic</span>
                            </li>

                        </ul>
                    </div>
                </div>

                <div>
                    <div className="title">NON-IT SKILLS</div>

                    <div className="data">
                        <ul className="list">
                            <li>
                                <img src="./asset/undraw_business_chat_re_gg4h.svg" alt="" />
                                <span className="skill_title">COMMUNICATION</span>
                                <span className="skill_level">Intermediate</span>
                            </li>

                            <li>
                                <img src="./asset/undraw_dev_focus_re_6iwt.svg" alt="" />
                                <span className="skill_title">BASIC COMPUTER</span>
                                <span className="skill_level">Advance</span>
                            </li>

                            <li>
                                <img src="./asset/undraw_good_team_re_hrvm.svg" alt="" />
                                <span className="skill_title">TEAM PLAYER</span>
                                <span className="skill_level">Good</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Skills;