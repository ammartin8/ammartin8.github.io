import React from "react";

import { Container, Row, Button } from "react-bootstrap";

function CalltoAction() {
  return (
    <Container id="hireMe" className="pb-4 my-5" style={{ justifyContent: "center" }}>
      <Row style={{ flexDirection: "column", alignItems: "center" }}>
        <p className="text-center">
          Whether it's designing an unique brand logo for your business,
          providing feedback to better enhance your website and gain new
          customers or bringing your idea to life, it is my goal to make your
          business goals a reality. <br /> Interested in Connecting?
        </p>
        <a href="mailto:ammartin8249@gmail.com">
        <Button variant="primary" style={{ width: "12em" }}>Start a Conversation</Button>
        </a>
      </Row>
    </Container>
  );
}

export default CalltoAction;
