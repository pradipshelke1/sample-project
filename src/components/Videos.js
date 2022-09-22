import React from "react";
import { Card, Container, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";

const Videos = () => {
  return (
    <React.Fragment>
      <Container>
        <Row className="mt-5">
          <Col md={6}>
            <Card>
              <ReactPlayer
                controls
                width="100%"
                url="https://player.vimeo.com/video/284436243?api=1&player_id=player_1"
              />
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <ReactPlayer
                controls
                width="100%"
                url="https://player.vimeo.com/video/284436243?api=1&player_id=player_1"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Videos;
