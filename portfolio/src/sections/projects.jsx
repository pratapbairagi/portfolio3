
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
                <img src="./asset/project1.jpg" alt="" />
                <div className="title project_title">E-Commerce</div>
                <p className="info project_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit dolorum adipisci ullam nisi suscipit!</p>
                <a href="https://shopnow-green.vercel.app" target="_blank">
                    See Demo <i class="ri-arrow-right-line"></i>
                </a>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div>
                <img src="./asset/project1.jpg" alt="" />
                <div className="title project_title">E-Commerce</div>
                <p className="info project_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit dolorum adipisci ullam nisi suscipit!</p>
                <a href="https://shopnow-green.vercel.app" target="_blank">
                    See Demo <i class="ri-arrow-right-line"></i>
                </a>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div>
                <img src="./asset/project1.jpg" alt="" />
                <div className="title project_title">E-Commerce</div>
                <p className="info project_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit dolorum adipisci ullam nisi suscipit!</p>
                <a href="https://shopnow-green.vercel.app" target="_blank">
                    See Demo <i class="ri-arrow-right-line"></i>
                </a>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div>
                <img src="./asset/project1.jpg" alt="" />
                <div className="title project_title">E-Commerce</div>
                <p className="info project_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit dolorum adipisci ullam nisi suscipit!</p>
                <a href="https://shopnow-green.vercel.app" target="_blank">
                    See Demo <i class="ri-arrow-right-line"></i>
                </a>
                </div>
                </SwiperSlide>

            </Swiper>
        </section>
    )
};

export default Projects;