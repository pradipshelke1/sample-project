import React from "react";
import { Card, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";
import Sidebar from "../Sidebar";

const Other = () => {
  return (
    <React.Fragment>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={10}>
          <Row className="mt-2">
            <Col md={12}>
              <Card>
                <ReactPlayer
                  controls
                  width="100%"
                  url="https://vimeo.com/457417445"
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Other;
