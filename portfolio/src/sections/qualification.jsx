

const Qualification = () => {
    return (
        <section className="container qualification_container" id="qualification">
            <h2 className="heading">QUALIFICARION</h2>
            <span className="subheading">EDUCATIONAL & COURSE</span>

            <div className="content grid qualification_grid">
                <div>
                    <div className="title">
                        <i className="ri-graduation-cap-line"></i> EDUCATIONAL
                    </div>
                    <div className="data">

                        <ul className="list">
                            <li >
                                <div className="data_heading">Graduation</div>
                                <span className="qualificatio_title">DELHI UNIVERSITY</span>
                                <span className="qualificatio_year">2016 - 2020</span>
                            </li>

                            <li style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                                <div className="data_heading">Schooling</div>

                                <span className="qualificatio_title">GOVT. BOYS SR. SEC. SCHOOL (CBSE)</span>
                                <span className="qualificatio_year">2004 - 2016</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="title">
                        <i className="ri-pencil-ruler-2-line"></i> SKILL COURSE 
                    </div>
                    <div className="data">

                        <ul className="list">
                            <li style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                                <div className="data_heading">Telly ERP</div>
                                <span className="qualificatio_title">PRIVATE UNKNOW INSTITUTE</span>
                                <span className="qualificatio_year">2020 - 2020</span>
                            </li>

                            <li style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                                <div className="data_heading">Basic Web Designing</div>

                                <span className="qualificatio_title">ANUDIP ORG.</span>
                                <span className="qualificatio_year">2022 - 2022</span>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
        </section>
    )
};

export default Qualification;