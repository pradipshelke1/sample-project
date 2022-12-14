import React from "react";
import { Card, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";
import Sidebar from "./Sidebar";

const Videos = () => {
  return (
    <React.Fragment>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>

        <Col md={10} className="mt-3">
          <Row>
            <Col md={12}>
              <Card>
                <ReactPlayer
                  controls
                  width="100%"
                  url="https://player.vimeo.com/video/284436243?api=1&player_id=player_1"
                />
              </Card>
            </Col>
            <Col md={12} className="mt-5">
              <Card>
                <ReactPlayer
                  controls
                  width="100%"
                  url="https://player.vimeo.com/video/284436243?api=1&player_id=player_1"
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Videos;
