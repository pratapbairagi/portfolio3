


const Footer = () => {
    return (
        <div className="container footer_container">
            <div className="content grid footer_grid">
                <ul className="list">
                    <li className="title">Pratap</li>
                    <li className="subheading">Frontend Developer</li>
                </ul>

                <ul className="list">
                    <li>
                    <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="#testimonial">Testimonial</a>
                    </li>
                </ul>

                <ul className="list">
                    <li>
                        <a href=""><i class="ri-github-line"></i></a>
                    </li>
                    <li>
                        <a href=""><i class="ri-instagram-line"></i></a>
                    </li>
                    <li>
                        <a href=""><i class="ri-instagram-line"></i></a>
                    </li>
                </ul>


            </div>
            <div className="footer_copy"> &#169; Copyright Pratap and co. All rights reseved  </div>
        </div>
    )
}

export default Footer;