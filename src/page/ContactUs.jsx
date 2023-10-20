/* eslint-disable react/no-unescaped-entities */
import {
  faAddressCard,
  faGlobe,
  faHome,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
  return (
    <div>
      <div className="out-tem position-relative">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog10.png?alt=media&token=82b6b506-aef0-4b72-aedf-3a77b01fdd53"
          className="position-absolute moveImgX"
          style={{ left: "20%", bottom: "10%" }}
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog27.png?alt=media&token=cd4cad58-b06a-410c-93eb-bacebb553b94"
          className="position-absolute moveImg"
          style={{ left: "5%", top: "10%" }}
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/download.png?alt=media&token=f0fe4c13-40da-41a8-aa0d-b81b1d8285be"
          className="position-absolute plusRotate"
          style={{ right: "5%", top: "50%" }}
        />
        <span style={{ fontSize: "4rem", color: "#1f2278", zIndex: "5" }}>
          Contact Us
        </span>
        <div
          style={{
            background: "#565acf",
            padding: "10px 15px",
            borderRadius: "15px",
            color: "#fff",
            zIndex: "5",
          }}
        >
          <Link to="/home">
            <span style={{ color: "#fff" }}>
              <FontAwesomeIcon icon={faHome} className="me-2" />
              Home
            </span>
          </Link>
          <span> / </span>
          <span>Contact Us</span>
        </div>
      </div>
      <Container>
        <div className="border p-4 mt-5">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Form>
                <Form.Group className="my-4" controlId="name">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="my-4" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group className="my-4" controlId="phone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>

                <Form.Select
                  className="my-5"
                  aria-label="Default select example"
                >
                  <option>Selecty Department</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>

                <FloatingLabel
                  className="my-5"
                  controlId="floatingTextarea2"
                  label="Type Message"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </Form>
            </div>
            <div className="col-md-6 col-sm-12 position-relative">
              <div className="bg-8 position-relative">
              </div>
                <div className="position-absolute top-0 w-75 h-75 ms-5 mt-5 " style={{color: '#fff'}}>
                  <h4 className="my-4">
                    Contact Us For Any Informations
                  </h4>
                  <div className="my-4">
                    <h6>
                      <FontAwesomeIcon icon={faMapLocation}  className="me-2"/> Location
                    </h6>
                    <div className="border my-4"></div>
                  </div>
                  <div className="my-4">
                    <h6 className="my-4">
                      <FontAwesomeIcon icon={faAddressCard} className="me-2" />
                      Email & Phone
                    </h6>
                    <div className="border my-4"></div>
                    <p>info@yourdomain.com</p>
                    <p>015555555555</p>
                  </div>
                  <div className="my-4">
                    <h6>
                      <FontAwesomeIcon icon={faGlobe}  className="me-2"/>
                       Follow Us
                    </h6>
                    <div className="border my-4"></div>
                    <ul className="d-flex my-4">
                      <li>
                        <FontAwesomeIcon icon={faTwitter} />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faLinkedin} />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faInstagram} />
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
