import React from "react";
import { Card, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";
import Sidebar from "../Sidebar";

const CgpiNavratna = () => {
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
                  url="https://vimeo.com/535441842"
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
                  url="https://vimeo.com/533558042"
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
                  url="https://vimeo.com/533557847"
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
                  url="https://vimeo.com/533556930"
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
                  url="https://vimeo.com/533556775"
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
                  url="https://vimeo.com/533555885"
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
                  url="https://vimeo.com/533555669"
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CgpiNavratna;
