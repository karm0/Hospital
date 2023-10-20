import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <Container>
    <div className="text-center py-4">
    <h5 style={{color: '#f39057'}}>Latest News</h5>
    <h1 style={{color: '#313483'}}>Our Latest News</h1>
    </div>
      <div className="row my-4">
        <div>
          <Swiper slidesPerView={2} spaceBetween={30} modules={[Pagination]}>
            <SwiperSlide className="our-team-slider">
              <div className="p-3">
                <div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog14.jpg?alt=media&token=4f04437b-4128-48c3-b150-138244344bb0"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <div
                  className="d-flex align-items-center justify-content-evenly fs-6 my-4"
                  style={{ color: "#f39057" }}
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog12.jfif?alt=media&token=c834db7f-a8a4-44b4-b5a5-6638f2b583ac"
                    style={{ width: "10%", borderRadius: "50%" }}
                  />
                  <p className="ps-3">Kalina Molika</p>
                  <p className="ps-3">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    18 July 2021
                  </p>
                </div>

                <div className="text-start ps-5">
                  <Button
                    style={{
                      background: "#cfd1ff",
                      border: "none",
                      color: "#6c71f4",
                      padding: ".6rem 1.3rem",
                    }}
                  >
                    Read More
                    <FontAwesomeIcon icon={faAngleRight} className="ms-3" />
                  </Button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="our-team-slider">
              <div className="p-3">
                <div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog13.jpg?alt=media&token=93d59499-c85e-4b4f-a8b1-8fb2431655fd"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <div
                  className="d-flex align-items-center justify-content-evenly fs-6 my-4"
                  style={{ color: "#f39057" }}
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog11.jfif?alt=media&token=c014d349-83a6-4806-a9b0-26afc142788c"
                    style={{ width: "10%", borderRadius: "50%" }}
                  />
                  <p className="ps-3">Michel</p>
                  <p className="ps-3">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    17 July 2021
                  </p>
                </div>

                <div className="text-start ps-5">
                  <Button
                    style={{
                      background: "#cfd1ff",
                      border: "none",
                      color: "#6c71f4",
                      padding: ".6rem 1.3rem",
                    }}
                  >
                    Read More
                    <FontAwesomeIcon icon={faAngleRight} className="ms-3" />
                  </Button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="our-team-slider">
              <div className="p-3">
                <div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog14.jpg?alt=media&token=4f04437b-4128-48c3-b150-138244344bb0"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <div
                  className="d-flex align-items-center justify-content-evenly fs-6 my-4"
                  style={{ color: "#f39057" }}
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog15.jfif?alt=media&token=f59e92e6-e9b0-40f2-b1d2-a7ba4380501d"
                    style={{ width: "10%", borderRadius: "50%" }}
                  />
                  <p className="ps-3">Johan deo</p>
                  <p className="ps-3">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    21 July 2021
                  </p>
                </div>

                <div className="text-start ps-5">
                  <Button
                    style={{
                      background: "#cfd1ff",
                      border: "none",
                      color: "#6c71f4",
                      padding: ".6rem 1.3rem",
                    }}
                  >
                    Read More
                    <FontAwesomeIcon icon={faAngleRight} className="ms-3" />
                  </Button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="our-team-slider">
              <div className="p-3">
                <div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog13.jpg?alt=media&token=93d59499-c85e-4b4f-a8b1-8fb2431655fd"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <div
                  className="d-flex align-items-center justify-content-evenly fs-6 my-4"
                  style={{ color: "#f39057" }}
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog16.jfif?alt=media&token=d1cae00b-99d8-40c6-a6ac-e4a273875fc4"
                    style={{ width: "10%", borderRadius: "50%" }}
                  />
                  <p className="ps-3">Sonar Moyna</p>
                  <p className="ps-3">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    19 July 2021
                  </p>
                </div>

                <div className="text-start ps-5">
                  <Button
                    style={{
                      background: "#cfd1ff",
                      border: "none",
                      color: "#6c71f4",
                      padding: ".6rem 1.3rem",
                    }}
                  >
                    Read More
                    <FontAwesomeIcon icon={faAngleRight} className="ms-3" />
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
