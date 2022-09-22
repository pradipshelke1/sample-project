import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Button,
  Col,
  InputGroup,
  Label,
  Row,
  FormGroup,
  Input,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import CustomInput from "./custom/CustomInput";
import * as Yup from "yup";
import { postLogin } from "../redux/actions/LoginCreators";

const Login = (props) => {
  const navigate = useNavigate();
  const toggle = () => {
    navigate("/videos");
  };
  const handleSubmit = (values, setSubmitting) => {
    let data = {
      email: values.email,
      password: values.password,
    };
    console.log(data);
    props.postLogin(data, toggle);
    setSubmitting(false);
    return;
  };
  return (
    <React.Fragment>
      <div className="main-div">
        <div className="auth-wrapper align-items-center">
          <div className="container" style={{ paddingTop: "105px" }}>
            <div className="no-gutters justify-content-center row">
              <div className="bg-white col-md-6 col-lg-4">
                <div className="p-4">
                  <h6 className="text-black text-login font-weight-bold">
                    Please fill in your credentials to login.
                  </h6>
                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={Yup.object().shape({
                      email: Yup.string()
                        .required("Enter Your Email")
                        .email("Invalid Email address"),
                      password: Yup.string().required("Enter Your Password"),
                    })}
                  >
                    {(formProps) => (
                      <Form className="mt-3">
                        <Row className="form-group mt-3">
                          <Col md={12}>
                            <Label
                              htmlFor="email"
                              className="font-weight-bold text-dark label"
                            >
                              Email
                            </Label>
                            <InputGroup>
                              <Field
                                component={CustomInput}
                                type="text"
                                name="email"
                                id="email"
                                placeholder="yourname@company.com"
                                className={
                                  "form-control" +
                                  (formProps.errors.email &&
                                  formProps.touched.email
                                    ? " is-invalid"
                                    : "")
                                }
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="invalid-feedback"
                              />
                            </InputGroup>
                          </Col>
                        </Row>
                        <Row className="form-group mt-3">
                          <Col md={12}>
                            <Label
                              htmlFor="password"
                              className="font-weight-bold text-dark label"
                            >
                              Password
                            </Label>
                            <InputGroup>
                              <Field
                                component={CustomInput}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="* * * * * *"
                                className={
                                  "form-control" +
                                  (formProps.errors.password &&
                                  formProps.touched.password
                                    ? " is-invalid"
                                    : "")
                                }
                              />
                              <ErrorMessage
                                name="password"
                                component="div"
                                className="invalid-feedback"
                              />
                            </InputGroup>
                          </Col>
                        </Row>
                        <div className="mt-4 mb-3 row">
                          <div className="col-12">
                            <Button
                              type="submit"
                              //disabled={formProps.isSubmitting}
                              color="success"
                              size="md"
                              block
                            >
                              LOGIN
                            </Button>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postLogin: (data, toggle) => {
    dispatch(postLogin(data, toggle));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
