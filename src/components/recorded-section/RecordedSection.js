import React from "react";
import { Card, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";
import Sidebar from "../Sidebar";

const RecordedSection = () => {
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
                  url="https://player.vimeo.com/video/545932551"
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
                  url="https://vimeo.com/543568826"
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default RecordedSection;
