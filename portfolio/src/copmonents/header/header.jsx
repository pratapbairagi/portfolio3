import { useRef } from "react";


const Header = () => {
    return(
        <div className="nav_container">
            <span className="logo">Pratap</span>

            <ul className="nav" id="nav">
            
                <li>
                    <a href="#home">
                    <i className="ri-home-4-line"></i> Home
                    </a>
                </li>
                <li>
                    <a href="#about">
                    <i className="ri-information-line"></i> About
                    </a>
                </li>
                <li>
                    <a href="#skills">
                    <i className="ri-trophy-line"></i> Skills
                    </a>
                </li>
                <li>
                    <a href="#qualification">
                    <i className="ri-book-open-line"></i> Qualification
                    </a>
                </li>
                <li>
                    <a href="">
                    <i className="ri-suitcase-line"></i> Services
                    </a>
                </li>
                <li>
                    <a href="">
                    <i className="ri-image-line"></i> Projects
                    </a>
                </li>

                <li className="cancel_menu" onClick={()=>{ document.getElementById("nav").classList.remove("active_nav") }}>
                    <i className="ri-close-line"></i>
                </li>

            </ul>
            

            <span onClick={()=>{ document.getElementById("nav").classList.add("active_nav")}}>
                <i className="ri-menu-4-line"></i>
            </span>
        </div>
    )
};

export default Header;