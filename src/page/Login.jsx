import { Button, Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <div>
      <Container className="mt-5 p-5">
        <div
          className="col-md-6 col-sm-8 m-auto border p-4"
          style={{
            borderRadius: "20px",
            background: "#f5f5fc",
            boxShadow: "5px 5px 10px 2px #e1e1e1",
          }}
        >
          <div className="d-flex justify-content-center my-5">
            <span className="logo"></span>
          </div>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-4"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <div className="text-center my-5">
            <Button
              className="fs-5"
              style={{
                backgroundColor: "#565acf",
                border: "none",
                width: "100%",
                padding: ".8rem 0",
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
