/* eslint-disable react/no-unescaped-entities */
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="out-tem position-relative mb-5">
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
          src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog27.png?alt=media&token=cd4cad58-b06a-410c-93eb-bacebb553b94"
          className="position-absolute plusRotate"
          style={{ right: "5%", top: "50%" }}
        />
        <span style={{ fontSize: "4rem", color: "#1f2278", zIndex: "5" }}>
          Error 404
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
          <span>Error 404</span>
        </div>
      </div>
      <Container>
        <div className="text-center">
          <h1 style={{ fontSize: "130px", color: "#1f2278" }}>
            4<span className="gif"></span>4
          </h1>
          <h1 style={{ color: "#1f2278", fontWeight: "bold" }}>
            The Page you were looking for,
          </h1>
          <h1 style={{ color: "#1f2278", fontWeight: "bold" }}>
            {" "}
            couldn't be found.
          </h1>
          <p>The page you are looking for might have been removed, had its</p>
          <p>name changed, or is temporarily unavailable.</p>
            <Button style={{background: '#565acf', border: 'none'}}>
              <Link to="/home">
                <span style={{ color: "#fff"}}>Back To Home</span>
              </Link>
            </Button>
        </div>
      </Container>
    </div>
  );
};

export default Error;
