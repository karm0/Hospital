import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Button, Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faPrescriptionBottleMedical, faStethoscope, faSyringe } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <Container>
      <div className="row my-5 ">
        <div className="col-md-5 col-sm-8 m-auto mb-5 ps-4">
          <h5 className="p-3" style={{color: '#f17732'}}>Services</h5>
          <h1 className="p-3" style={{color: '#1f2278'}}>We Cover A Big Variety Of Medical Services</h1>
          <p className="p-3" >
            We provide the special tips and advice’s of heath care treatment and
            high level of best.
          </p>
          <div className="p-3">
            <Button style={{background:'#f17732', border: 'none', padding: '.8rem 1.6rem'}}>All Services</Button>
          </div>
        </div>
        <div className="col-md-7 col-sm-8 m-auto position-relative">
        <img src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog10.png?alt=media&token=82b6b506-aef0-4b72-aedf-3a77b01fdd53" className="position-absolute moveImgX"
        style={{left: '-5%', bottom: '0%'}}
        />
          <Swiper
            slidesPerView={2}
            loop={true}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="cards ">
           
            <div className="p-3 ">
                <div className=" text-start ps-4 ">
                  <FontAwesomeIcon
                    icon={faStethoscope}
                    className="border p-5 fs-1 my-3"
                    style={{ borderRadius: "15px" }}
                  />
                </div>
                <h3 className="my-4 text-start ps-3"  style={{color: '#1f2278'}}>Diagnostics</h3>
                <p className=" text-start ps-3" style={{ fontSize: "15px" }}>
                  Phasellus venenatis porta rhoncus. Integer et viverra felis.
                </p>
                <div className="text-start ps-3 my-4">
                  <Button
                  style={{
                    background: "#cfd1ff",
                    border: "none",
                    color: "#6c71f4",
                    padding: ".7rem 1.8rem",
                  }}
                  className="btn-hover"
                  >
                    View More
                  </Button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="cards">
              <div className="p-3">
                <div className=" text-start ps-4 ">
                  <FontAwesomeIcon
                    icon={faPrescriptionBottleMedical}
                    className="border p-5 fs-1 my-3"
                    style={{ borderRadius: "15px" }}
                  />
                </div>
                <h3 className="my-4 text-start ps-3" style={{color: '#1f2278'}}>Treatment</h3>
                <p className=" text-start ps-3" style={{ fontSize: "15px" }}>
                  Phasellus venenatis porta rhoncus. Integer et viverra felis.
                </p>
                <div className="text-start ps-3 my-4">
                  <Button
                    style={{
                      background: "#cfd1ff",
                      border: "none",
                      color: "#6c71f4",
                      padding: ".7rem 1.8rem",
                    }}
                  >
                    View More
                  </Button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="cards">
              <div className="p-3">
                <div className=" text-start ps-4 ">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="border p-5 fs-1 my-3"
                    style={{ borderRadius: "15px" }}
                  />
                </div>
                <h3 className="my-4 text-start ps-3" style={{color: '#1f2278'}}>Surgery</h3>
                <p className=" text-start ps-3" style={{ fontSize: "15px" }}>
                  Phasellus venenatis porta rhoncus. Integer et viverra felis.
                </p>
                <div className="text-start ps-3 my-4">
                  <Button
                    style={{
                      background: "#cfd1ff",
                      border: "none",
                      color: "#6c71f4",
                      padding: ".7rem 1.8rem",
                    }}
                  >
                    View More
                  </Button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="cards">
              <div className="p-3">
                <div className=" text-start ps-4 ">
                  <FontAwesomeIcon
                    icon={faSyringe}
                    className="border p-5 fs-1 my-3"
                    style={{ borderRadius: "15px" }}
                  />
                </div>
                <h3 className="my-4 text-start ps-3" style={{color: '#1f2278'}}>Vaccine</h3>
                <p className=" text-start ps-3" style={{ fontSize: "15px" }}>
                  Phasellus venenatis porta rhoncus. Integer et viverra felis.
                </p>
                <div className="text-start ps-3 my-4">
                  <Button
                    style={{
                      background: "#cfd1ff",
                      border: "none",
                      color: "#6c71f4",
                      padding: ".7rem 1.8rem",
                    }}
                  >
                    View More
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Services;
