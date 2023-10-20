import { Button, Container } from "react-bootstrap";

const Book = () => {
  return (
    <div className="bg-4">
      <Container
        className="position-relative"
        style={{ background: "#f4f4fb", borderRadius: "25px", overflow: 'hidden' }}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog17.png?alt=media&token=22dbe610-3d06-49f1-a0aa-9f2178905fd9"
          className="position-absolute moveImg"
          style={{ left: "-5%", top: "11%",zIndex: '-1'}}
        />
        <div className="row m-auto p-1">
          <div
            className="col-md-6 col-sm-12 m-auto my-3 "
            style={{
              background: "#fff",
              borderRadius: "50px",
              boxShadow: "-3px 5px 10px 1px #f17732",
            }}
          >
            <h2 className="p-4">Book Appointment</h2>
            <form>
              <div className="p-4">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option defaultValue>Selecty Department</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="p-4">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option defaultValue>Select Doctor</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="input-group mb-3 p-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="input-group mb-3 p-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Phone Numbers"
                />
              </div>
              <div className="input-group mb-3 p-3">
                <input type="date" className="form-control" aria-label="Date" />
              </div>
            </form>
            <div className="p-3 text-center">
              <Button
                style={{
                  padding: ".8rem 2rem",
                  background: "#f17732",
                  border: "none   ",
                }}
              >
                Appointment Now
              </Button>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex align-items-center m-auto my-5 position-relative">
            <div className="d-flex justify-content-center">
              <div className="position-relative">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog6.png?alt=media&token=44babc8e-8458-48a4-ada9-f9eb0f7c4289"
                  className="position-absolute moveImg"
                  style={{ left: "10%", top: "-15%", width: "15%" }}
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog8.png?alt=media&token=23f689dd-0a4c-4c99-b324-893d88e508df"
                  className="position-absolute"
                  style={{ left: "7%", top: "45%", width: "18%" }}
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog7.png?alt=media&token=436120bb-dbe3-422b-a56d-d199bd037163"
                  className="position-absolute"
                  style={{ left: "52%", top: "70%", width: "18%" }}
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/mobile.f82d73222992d2101a09.png?alt=media&token=672b6701-1b0d-4dd4-a68a-344efec4cbe5"
                  style={{ width: "100%" }}
                />
              </div>
      
              <div className="position-relative">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/blog9.png?alt=media&token=d47262eb-08ab-415e-9f88-902162c617c1"
                  className="position-absolute"
                  style={{ left: "45%", top: "-10%", width: "60%" }}
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/hospital-2eaf1.appspot.com/o/casual-life-3d-young-man-holding-orange-smartphone-and-tapping-foot.png?alt=media&token=d8d660d7-ad8c-4030-9d08-164390d9159b"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Book;
