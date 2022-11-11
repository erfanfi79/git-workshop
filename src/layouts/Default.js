import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navigate } from "react-router-dom";


const DefaultLayout = ({ children, noNavbar = false }) => {
  return (
    <Container fluid>
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
};

export default DefaultLayout;
