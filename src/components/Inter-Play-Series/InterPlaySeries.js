import React from "react";
import { Card, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";
import Sidebar from "../Sidebar";

const InterPlaySeries = () => {
  return (
    <React.Fragment>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={10}>
          <Row className="mt-3">
            <h3 className="text-center">Inter Play Series</h3>
          </Row>
          <Row className="mt-2">
            <Col md={12}>
              <Card>
                <ReactPlayer
                  controls
                  width="100%"
                  url="https://vimeo.com/587819879"
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
                  url="https://vimeo.com/587819947"
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
                  url="https://vimeo.com/587820168"
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
                  url="https://vimeo.com/587820268"
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
                  url="https://vimeo.com/587820410"
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
                  url="https://vimeo.com/587820525"
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
                  url="https://vimeo.com/587820651"
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default InterPlaySeries;
