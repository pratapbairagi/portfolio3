
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Projects = () => {
    return (
        <section className="container projects_container" id='projects'>
            <h2 className="heading">PROJECTS</h2>
            <span className="subheading">PROJECTS THAT I WORKED</span>

            <Swiper 
            className="content grid projects_flex mySwiper"
            cssMode={true}
        navigation={true}
        pagination={true}
        // mousewheel={true}
        // keyboard={true}
        modules={[Navigation, Pagination]}
            >
                <SwiperSlide>
                <div>
                <img src="./asset/tic-tac-toe.jpg" alt="tic-tac-toe" />
                <div className="title project_title">Basic Tic Tac Toe Game</div>
                <p className="info project_info">Used main three web technologies HTML CSS and JavaScript.</p>
                <a href="https://tic-tac-toe-protap.vercel.app" target="_blank">
                    See Demo <i className="ri-arrow-right-line"></i>
                </a>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div>
                <img src="./asset/dashboard.jpg" alt="dashboard" />
                <div className="title project_title">Static Dashboard UI</div>
                <p className="info project_info">This is just Dashboard UI made with HTML and CSS.</p>
                <a href="https://dashboard-lime-nine.vercel.app" target="_blank">
                    See Demo <i className="ri-arrow-right-line"></i>
                </a>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div>
                <img src="./asset/ecommerce.jpg" alt="e-commerce" />
                <div className="title project_title">E-Commerce</div>
                <p className="info project_info">Here used ReactJs, NodeJs, Express, Bootstrap, mongoDD and other npm library for authentication and etc.</p>
                <a href="https://shopnow-green.vercel.app" target="_blank">
                    See Demo <i className="ri-arrow-right-line"></i>
                </a>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div>
                <img src="./asset/cv-maker.jpg" alt="cv-maker" />
                <div className="title project_title">CV Maker and Portfolio website</div>
                <p className="info project_info">ReactJs and Bootstrap based frontend, NodeJs & ExpressJs used for backend and mongoDB for database.  </p>
                <a href="https://cv-cum-portfolio.vercel.app" target="_blank">
                    See Demo <i className="ri-arrow-right-line"></i>
                </a>
                </div>
                </SwiperSlide>

            </Swiper>
        </section>
    )
};

export default Projects;