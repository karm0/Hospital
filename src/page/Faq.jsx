/* eslint-disable react/no-unescaped-entities */
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <div>
    <div className="out-tem position-relative">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog10.png?alt=media&token=82b6b506-aef0-4b72-aedf-3a77b01fdd53"
          className="position-absolute moveImgX"
          style={{ left: "20%", bottom: "10%"}}
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog27.png?alt=media&token=cd4cad58-b06a-410c-93eb-bacebb553b94"
          className="position-absolute moveImg"
          style={{ left: "5%", top: "10%" }}
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog27.png?alt=media&token=cd4cad58-b06a-410c-93eb-bacebb553b94"
          className="position-absolute plusRotate"
          style={{ right: "5%", top: "50%" }}
        />
        <span style={{ fontSize: "4rem", color: "#1f2278", zIndex: '5' }}>Faq's</span>
        <div
          style={{
            background: "#565acf",
            padding: "10px 15px",
            borderRadius: "15px",
            color: "#fff",
            zIndex: '5'
          }}
        >
          <Link to="/home">
            <span style={{ color: "#fff" }}>
              <FontAwesomeIcon icon={faHome} className="me-2" />
              Home
            </span>
          </Link>
          <span> / </span>
          <span>Faq's</span>
        </div>
      </div>
      <Container className="my-5">
        <div className="row" >
          <div className="col-md-6 col-sm-12 p-3 "  >
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" >
                <Accordion.Header>How Doctor Can Ease Your Pain</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore
                </Accordion.Body>
              </Accordion.Item>
      
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How do Iwithdraw from a subject
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore
                </Accordion.Body>
              </Accordion.Item>
      
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Understand Doctor Before You Regret
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore
                </Accordion.Body>
              </Accordion.Item>
      
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  What types of systems do you support
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore
                </Accordion.Body>
              </Accordion.Item>
      
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  We Teach You How To Fell Better?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore
                </Accordion.Body>
              </Accordion.Item>
      
              <Accordion.Item eventKey="5">
                <Accordion.Header>How Can I contact You?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
      
          <div className="col-md-6 col-sm-12 p-3">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  How do I withdraw from a subject?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore
                </Accordion.Body>
              </Accordion.Item>
      
              <Accordion.Item eventKey="1">
                <Accordion.Header>What's a payment statement?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore
                </Accordion.Body>
              </Accordion.Item>
      
              <Accordion.Item eventKey="2">
                <Accordion.Header>How Can I Contact You?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore
                </Accordion.Body>
              </Accordion.Item>
      
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  How do Iwithdraw from a subject?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore
                </Accordion.Body>
              </Accordion.Item>
      
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Understand Doctor Before You Regret?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore
                </Accordion.Body>
              </Accordion.Item>
      
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  How Doctore Can Ease Your Pain?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
