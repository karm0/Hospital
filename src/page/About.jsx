import { Button, Container } from "react-bootstrap";

const About = () => {
  return (
    <div className="bg-6 about mt-5">
      <Container>
        <div className="row">
          <div className="col-md-6  ">
            <div className="row">
              <div className="col-6  d-flex ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog2.png?alt=media&token=46da8335-ad00-4d0c-9893-c62d8259e91d"
                  width={"50%"}
                  style={{ margin: "auto" }}
                />
              </div>
              <div className="col-6  d-flex ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog3.png?alt=media&token=ac633e96-e016-4d50-ac7c-3ca2247bd557"
                  width={"100%"}
                  style={{ margin: "auto" }}
                />
              </div>
              <div className="col-6  d-flex">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog5.png?alt=media&token=10bf3436-a020-439e-9aa4-ddfa020c5042"
                  width={"40%"}
                  style={{ margin: "auto" }}
                />
              </div>
              <div className="col-6  text-center " style={{
                background: "#e6e7ff",
                borderTopRightRadius: '40%',
                borderTopLeftRadius: '40%',
                borderBottomLeftRadius: '40%',
                border: '2px solid #565acf',
                boxShadow: '-10px -10px 10px 10px #e6e7ff '
              }}>
                <p
                  className=" p-3"
                  style={{
                    fontSize: "7rem",
                    color: "#565acf",
                    
                  }}
                >
                  20
                </p>
                <p
                  className="fs-5 "
                  style={{ color: "#1f2278", fontWeight: "600" }}
                >
                  Year Experience
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 ">
            <h5 className="p-3 "  style={{color: '#f39057'}}>About Us</h5>
            <h1 className="p-2" style={{color: '#313483'}}>The Great Place Of Medical Hospital Center</h1>
            <p className="p-3">
              We provide the special tips and advice’s of heath care treatment
              and high level of best technology involve in the our hospital.
            </p>
            <div className="row p-4 ">
              <div className="col-md-6 d-flex p-3  align-items-center">
                <span
                  className="fs-4 me-3 p-3"
                  style={{
                    background: "#ecfcff",
                    borderTopRightRadius: "50%",
                    borderBottomRightRadius: "50%",
                  }}
                >
                  🚨
                </span>
                Emergency Help
              </div>
              <div className="col-md-6 d-flex p-3 align-items-center">
                <span
                  className="fs-4 me-3 p-3"
                  style={{
                    background: "#eefff4",
                    borderTopRightRadius: "50%",
                    borderBottomRightRadius: "50%",
                  }}
                >
                  🛏️
                </span>
                Qualified Doctors
              </div>
              <div className="col-md-6 d-flex p-3  align-items-center">
                <span
                  className="fs-4 me-3 p-3"
                  style={{
                    background: "#fff0f0",
                    borderTopRightRadius: "50%",
                    borderBottomRightRadius: "50%",
                  }}
                >
                  💧
                </span>
                Best Professionals
              </div>
              <div className="col-md-6 d-flex p-3  align-items-center">
                <span
                  className="fs-4 me-3 p-3"
                  style={{
                    background: "#f8f0ff",
                    borderTopRightRadius: "50%",
                    borderBottomRightRadius: "50%",
                  }}
                >
                  💉
                </span>
                Medical Treatment
              </div>
            </div>
            <div className="p-3">
              <Button className="ms-3 p-2 px-4" style={{background: '#565acf', border: 'none'}}>Read More</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
