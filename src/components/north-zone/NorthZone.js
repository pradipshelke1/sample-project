import React from "react";
import { Card, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";
import Sidebar from "../Sidebar";

const NorthZone = () => {
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
                  url="https://vimeo.com/476179964"
                />
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={12}>
              <Card>
                <ReactPlayer
                  controls
                  width="100%"
                  url="https://vimeo.com/476179361"
                />
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={12}>
              <Card>
                <ReactPlayer
                  controls
                  width="100%"
                  url="https://vimeo.com/476178897"
                />
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={12}>
              <Card>
                <ReactPlayer
                  controls
                  width="100%"
                  url="https://vimeo.com/476178385"
                />
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={12}>
              <Card>
                <ReactPlayer
                  controls
                  width="100%"
                  url="https://vimeo.com/475465709"
                />
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={12}>
              <Card>
                <ReactPlayer
                  controls
                  width="100%"
                  url="https://vimeo.com/457670342"
                />
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={12}>
              <Card>
                <ReactPlayer
                  controls
                  width="100%"
                  url="https://vimeo.com/457669157"
                />
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={12}>
              <Card>
                <ReactPlayer
                  controls
                  width="100%"
                  url="https://vimeo.com/457667688"
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default NorthZone;
