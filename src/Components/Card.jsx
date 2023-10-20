import { Button, Container } from "react-bootstrap";

const Card = () => {
  return (
    <Container>
      <div className="row d-flex justify-content-center p-5 gap-5">
        <div className="text-center p-5">
          <h6 style={{color: '#f17732'}}>Working Process</h6>
          <h1 style={{color: '#1f2278'}}>How we works?</h1>
        </div>
        <div
          className="col-md-3  col-sm-8 change"
          style={{ background: "#ffffff", borderRadius: "15px" }}
        >
          <p style={{ fontSize: "5rem", color: '#f17732' }} className=" p-2">
            01
          </p>
          <h5 className=" p-2" style={{color: '#f17732'}}>Make Appointmnet</h5>
          <p className=" p-2">
            It is a long established fact that a reader will be distracted by
            the readable content of.
          </p>
          <div className="p-2 pb-4">
            <Button
              style={{
                background: "#e1e2f6",
                border: "none",
                color: "#6769d1",
                padding: ".7rem 2rem",
              }}
            >
              View More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-caret-right-square-fill ms-2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z" />
              </svg>
            </Button>
          </div>
        </div>
        <div
          className="col-md-3  col-sm-8 top"
          style={{ background: "#f17732", borderRadius: "15px", color: "#fff",
        }}
        >
          <p style={{ fontSize: "5rem" }} className=" p-2">
            02
          </p>
          <h5 className=" p-2">Take Treatment</h5>
          <p className=" p-2">
            It is a long established fact that a reader will be distracted by
            the readable content of.
          </p>
          <div className="p-2 pb-4">
            <Button
              style={{
                background: "#fff",
                border: "none",
                color: "#f17732",
                padding: ".7rem 2rem",
              }}
            >
              View More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-caret-right-square-fill ms-2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z" />
              </svg>
            </Button>
          </div>
        </div>
        <div
          className="col-md-3  col-sm-8 change"
          style={{ background: "#ffffff", borderRadius: "15px" }}
        >
          <p style={{ fontSize: "5rem", color: '#f17732' }} className=" p-2">
            03
          </p>
          <h5 className=" p-2" style={{color: '#f17732'}}>Registration</h5>
          <p className=" p-2">
            It is a long established fact that a reader will be distracted by
            the readable content of.
          </p>
          <div className="p-2 pb-4">
            <Button
              style={{
                background: "#e1e2f6",
                border: "none",
                color: "#6769d1",
                padding: ".7rem 2rem",
              }}
            >
              View More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-caret-right-square-fill ms-2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card;
