import { Button, Container } from "react-bootstrap";
import About from './About'
import Card from "../Components/Card";
import Book from "./Book";
import Services from "./Services";
import OurLatestNews from './OurLatestNews'

const Home = () => {
  return (
    <div>
      <header>
        <div style={{background: '#f7f7ff'}} className="main-banner position-relative">
          <Container className="container-1">
            <div className="row m-auto">
              <div className="col-md-6 col-lg-6 text" style={{ marginTop: "8rem" }}>
                <span
                  style={{
                    display: "flex",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    background: "#565acf",
                    boxShadow: "-15px -15px 1px 15px #e6e7ff",
                    margin: "1rem 5rem",
                  }}
                ></span>
                <h6>We Provide All Health Care Solution</h6>
                <h1 className="my-5 ">
                  Protect Your Health And Take Care To Of Your Health
                </h1>
                <Button
                  className="fs-5 mb-5"
                  style={{ background: "#f39057", border: "none" }}
                >
                  Read More
                </Button>
                  <div className="text-center">
                  <img src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/download.png?alt=media&token=f0fe4c13-40da-41a8-aa0d-b81b1d8285be" />
                  </div>
              </div>
          
              <div className="col-md-6 col-lg-6">
                <span
                  style={{
                    display: "flex",
                    width: "50px",
                    height: "50px",
                    boxShadow: "5px -8px 1px 3px #e6e7ff",
                    background: "#e6e7ff",
                    border: "3px solid #7174d7",
                    rotate: "135deg",
                    marginTop: "8rem",
                  }}
                  className="square"
                ></span>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/pocus-hand-with-medicine-symbol.png?alt=media&token=a00556e9-58c7-498a-83e9-4bda6b13305e"
                  style={{ maxWidth: "100%", width: "430px" }}
                  className="moveImg"
                />
              </div>
            </div>
          </Container>
        </div>
        <About />
        <Card />
        <Book />
        <Services />
        <OurLatestNews />
      </header>
    </div>
  );
};

export default Home;
