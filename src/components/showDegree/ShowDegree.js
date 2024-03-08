import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./showDegree.css";
import degree from "../../degree.json";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeStateToinputValue } from "../../store/slices/pass-slice.js";
import exams from "../../examesData.json";

function ShowDegree() {
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [isEmailTrue, setIsEmailTrue] = useState(false);
  let [isPassTrue, setIsPassTrue] = useState(false);

  const state = useSelector((state) => state.Pass);
  const dispatch = useDispatch();

  useEffect(() => {
    // check if state.email and state.password (this is global state by redux) = email and password
    state.Email === degree.email ? setIsEmailTrue(true) : setIsEmailTrue(false);
    state.Pass === degree.password ? setIsPassTrue(true) : setIsPassTrue(false);
  }, [state]);

  return (
    <div className="show-degree mt-5">
      <h2 className="w-100 text-center mb-5">هذه الصفحة للمشرفين فقط</h2>
      <div className="container">
        {isEmailTrue && isPassTrue ? (
          // if email and password is correct
          exams.map((exam) => {
            return (
              <div className="degrees-links" key={exam.id}>
                <h2>{exam.titleOfExam}</h2>
                <a
                  className="link-to-degree"
                  target="_blank"
                  rel="noreferrer"
                  href={exam.linkDegrees}
                >
                  اضغط لعرض النتائج
                </a>
              </div>
            );
          })
        ) : (
          // if email and password is wrong
          <Form
            className="p-2"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">البريد الالكتروني*</Form.Label>
              <Form.Control
                autoComplete="true"
                id="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                type="email"
                placeholder="ادخل الايميل"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">كلمة السر*</Form.Label>
              <Form.Control
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                id="password"
                type="password"
                placeholder="ادخل كلمة السر"
              />
            </Form.Group>
            <Button
              onClick={() => {
                // change state global to input form values {Email: *****, Pass: *****}
                dispatch(
                  changeStateToinputValue({ Email: email, Pass: password })
                );
              }}
              variant="primary"
              type="submit"
              className="w-100"
            >
              تحقق
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
}

export default ShowDegree;
