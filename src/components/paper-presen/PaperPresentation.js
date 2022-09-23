import React from "react";
import { Card, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";
import Sidebar from "../Sidebar";

const PaperPresentation = () => {
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
                  url="https://vimeo.com/478822530"
                />
              </Card>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={12}>
              <Card>
                <ReactPlayer
                  controls
                  width="100%"
                  url="https://vimeo.com/475077698"
                />
              </Card>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={12}>
              <Card>
                <ReactPlayer
                  controls
                  width="100%"
                  url="https://vimeo.com/457667259"
                />
              </Card>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={12}>
              <Card>
                <ReactPlayer
                  controls
                  width="100%"
                  url="https://vimeo.com/457417396"
                />
              </Card>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={12}>
              <Card>
                <ReactPlayer
                  controls
                  width="100%"
                  url="https://vimeo.com/454701933"
                />
              </Card>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={12}>
              <Card>
                <ReactPlayer
                  controls
                  width="100%"
                  url="https://vimeo.com/454701825"
                />
              </Card>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={12}>
              <Card>
                <ReactPlayer
                  controls
                  width="100%"
                  url="https://vimeo.com/454701670"
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default PaperPresentation;
