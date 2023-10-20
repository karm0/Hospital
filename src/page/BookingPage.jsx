/* eslint-disable react/no-unescaped-entities */
import { Container } from "react-bootstrap"
import Book from './Book'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"


const BookingPage = () => {
  return (
    <div>
    <div className="out-tem position-relative mb-5">
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
          src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/download.png?alt=media&token=f0fe4c13-40da-41a8-aa0d-b81b1d8285be"
          className="position-absolute plusRotate"
          style={{ right: "5%", top: "50%" }}
        />
        <span style={{ fontSize: "4rem", color: "#1f2278", zIndex: '5' }}>Booking</span>
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
          <span>Booking</span>
        </div>
      </div>
      <Container>
      <Book />
      </Container>
    </div>
  )
}

export default BookingPage
