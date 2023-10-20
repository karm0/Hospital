import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const OurTeam = () => {
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
        <span style={{ fontSize: "4rem", color: "#1f2278", zIndex: '5' }}>Our Team</span>
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
          <span>Our Team</span>
        </div>
      </div>
      <Container className="mt-5">
        <div>
          <div className="d-flex gap-5 flex-wrap justify-content-center text-center">
            <Card
              style={{ width: "20rem", borderRadius: "15px" }}
              className="p-4 card-team"
            >
              <Card.Img
                variant="top"
                src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog12.jfif?alt=media&token=c834db7f-a8a4-44b4-b5a5-6638f2b583ac"
                style={{
                  borderRadius: "50%",
                  width: "70%",
                  margin: "auto",
                  border: "5px solid #f59d6a",
                  padding: "8px",
                }}
              />
              <Card.Body>
                <Card.Title className="fs-3 " style={{ color: "#1f2278" }}>
                  Dr. Addition Smith
                </Card.Title>
                <Card.Text className="my-4" style={{ color: "#f59d6a" }}>
                  Dentist
                </Card.Text>
                <div className="d-flex justify-content-evenly">
                  <span
                    className="border "
                    style={{
                      background: "#565ace",
                      color: "#fff",
                      borderRadius: "15px",
                      padding: "10px 15px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                  <span
                    className="border "
                    style={{
                      background: "#565ace",
                      color: "#fff",
                      borderRadius: "15px",
                      padding: "10px 15px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                  <span
                    className="border "
                    style={{
                      background: "#565ace",
                      color: "#fff",
                      borderRadius: "15px",
                      padding: "10px 15px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </div>
              </Card.Body>
            </Card>

            <Card
              style={{ width: "20rem", borderRadius: "15px" }}
              className="p-4 card-team"
            >
              <Card.Img
                variant="top"
                src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog11.jfif?alt=media&token=c014d349-83a6-4806-a9b0-26afc142788c"
                style={{
                  borderRadius: "50%",
                  width: "70%",
                  margin: "auto",
                  border: "5px solid #f59d6a",
                  padding: "8px",
                }}
              />
              <Card.Body>
                <Card.Title className="fs-3 " style={{ color: "#1f2278" }}>
                  Dr. Addition Smith
                </Card.Title>
                <Card.Text className="my-4" style={{ color: "#f59d6a" }}>
                  Dentist
                </Card.Text>
                <div className="d-flex justify-content-evenly">
                  <span
                    className="border "
                    style={{
                      background: "#565ace",
                      color: "#fff",
                      borderRadius: "15px",
                      padding: "10px 15px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                  <span
                    className="border "
                    style={{
                      background: "#565ace",
                      color: "#fff",
                      borderRadius: "15px",
                      padding: "10px 15px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                  <span
                    className="border "
                    style={{
                      background: "#565ace",
                      color: "#fff",
                      borderRadius: "15px",
                      padding: "10px 15px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </div>
              </Card.Body>
            </Card>

            <Card
              style={{ width: "20rem", borderRadius: "15px" }}
              className="p-4 card-team"
            >
              <Card.Img
                variant="top"
                src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog15.jfif?alt=media&token=f59e92e6-e9b0-40f2-b1d2-a7ba4380501d"
                style={{
                  borderRadius: "50%",
                  width: "70%",
                  margin: "auto",
                  border: "5px solid #f59d6a",
                  padding: "8px",
                }}
              />
              <Card.Body>
                <Card.Title className="fs-3 " style={{ color: "#1f2278" }}>
                  Dr. Addition Smith
                </Card.Title>
                <Card.Text className="my-4" style={{ color: "#f59d6a" }}>
                  Dentist
                </Card.Text>
                <div className="d-flex justify-content-evenly">
                  <span
                    className="border "
                    style={{
                      background: "#565ace",
                      color: "#fff",
                      borderRadius: "15px",
                      padding: "10px 15px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                  <span
                    className="border "
                    style={{
                      background: "#565ace",
                      color: "#fff",
                      borderRadius: "15px",
                      padding: "10px 15px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                  <span
                    className="border "
                    style={{
                      background: "#565ace",
                      color: "#fff",
                      borderRadius: "15px",
                      padding: "10px 15px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </div>
              </Card.Body>
            </Card>

            <Card
              style={{ width: "20rem", borderRadius: "15px" }}
              className="p-4 card-team"
            >
              <Card.Img
                variant="top"
                src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog16.jfif?alt=media&token=d1cae00b-99d8-40c6-a6ac-e4a273875fc4"
                style={{
                  borderRadius: "50%",
                  width: "70%",
                  margin: "auto",
                  border: "5px solid #f59d6a",
                  padding: "8px",
                }}
              />
              <Card.Body>
                <Card.Title className="fs-3 " style={{ color: "#1f2278" }}>
                  Dr. Addition Smith
                </Card.Title>
                <Card.Text className="my-4" style={{ color: "#f59d6a" }}>
                  Dentist
                </Card.Text>
                <div className="d-flex justify-content-evenly">
                  <span
                    className="border "
                    style={{
                      background: "#565ace",
                      color: "#fff",
                      borderRadius: "15px",
                      padding: "10px 15px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                  <span
                    className="border "
                    style={{
                      background: "#565ace",
                      color: "#fff",
                      borderRadius: "15px",
                      padding: "10px 15px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                  <span
                    className="border "
                    style={{
                      background: "#565ace",
                      color: "#fff",
                      borderRadius: "15px",
                      padding: "10px 15px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </div>
              </Card.Body>
            </Card>

            <Card
              style={{ width: "20rem", borderRadius: "15px" }}
              className="p-4 card-team"
            >
              <Card.Img
                variant="top"
                src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog11.jfif?alt=media&token=c014d349-83a6-4806-a9b0-26afc142788c"
                style={{
                  borderRadius: "50%",
                  width: "70%",
                  margin: "auto",
                  border: "5px solid #f59d6a",
                  padding: "8px",
                }}
              />
              <Card.Body>
                <Card.Title className="fs-3 " style={{ color: "#1f2278" }}>
                  Dr. Addition Smith
                </Card.Title>
                <Card.Text className="my-4" style={{ color: "#f59d6a" }}>
                  Dentist
                </Card.Text>
                <div className="d-flex justify-content-evenly">
                  <span
                    className="border "
                    style={{
                      background: "#565ace",
                      color: "#fff",
                      borderRadius: "15px",
                      padding: "10px 15px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                  <span
                    className="border "
                    style={{
                      background: "#565ace",
                      color: "#fff",
                      borderRadius: "15px",
                      padding: "10px 15px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                  <span
                    className="border "
                    style={{
                      background: "#565ace",
                      color: "#fff",
                      borderRadius: "15px",
                      padding: "10px 15px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </div>
              </Card.Body>
            </Card>

            <Card
              style={{ width: "20rem", borderRadius: "15px" }}
              className="p-4 card-team"
            >
              <Card.Img
                variant="top"
                src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog12.jfif?alt=media&token=c834db7f-a8a4-44b4-b5a5-6638f2b583ac"
                style={{
                  borderRadius: "50%",
                  width: "70%",
                  margin: "auto",
                  border: "5px solid #f59d6a",
                  padding: "8px",
                }}
              />
              <Card.Body>
                <Card.Title className="fs-3 " style={{ color: "#1f2278" }}>
                  Dr. Addition Smith
                </Card.Title>
                <Card.Text className="my-4" style={{ color: "#f59d6a" }}>
                  Dentist
                </Card.Text>
                <div className="d-flex justify-content-evenly">
                  <span
                    className="border "
                    style={{
                      background: "#565ace",
                      color: "#fff",
                      borderRadius: "15px",
                      padding: "10px 15px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                  <span
                    className="border "
                    style={{
                      background: "#565ace",
                      color: "#fff",
                      borderRadius: "15px",
                      padding: "10px 15px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                  <span
                    className="border "
                    style={{
                      background: "#565ace",
                      color: "#fff",
                      borderRadius: "15px",
                      padding: "10px 15px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurTeam;
