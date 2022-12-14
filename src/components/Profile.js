import React from "react";
import { useSelector } from "react-redux";
import { Table, Row, Col } from "reactstrap";

import Sidebar from "./Sidebar";

const Profile = () => {
  const { login } = useSelector((state) => state.login);
  console.log("login", login);
  return (
    <React.Fragment>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md="10">
          <section className="main-profile">
            <div className="profile-wrapper">
              <div className="container" style={{ paddingTop: "105px" }}>
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header bg-dark text-white">
                        <p className="h4">Your Information</p>
                      </div>
                      <div className="card-body bg-light">
                        <Table>
                          <tbody>
                            <tr>
                              <th scope="row">Name</th>
                              <td>{login?.user?.name}</td>
                            </tr>
                            <tr>
                              <th scope="row">Email</th>
                              <td>{login?.user?.email}</td>
                            </tr>
                            <tr>
                              <th scope="row">Mobile</th>
                              <td>{login?.user?.mobile_no}</td>
                            </tr>
                            <tr>
                              <th scope="row">Pincode</th>
                              <td>{login?.user?.pincode}</td>
                            </tr>
                            <tr>
                              <th scope="row">Role</th>
                              <td>{login?.user?.designation}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default Profile;
