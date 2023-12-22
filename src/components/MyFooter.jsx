import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

class MyFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className='mt-5'>
        <Container>
          <Row className='text-secondary text-start '>
            <Col sm={6} md={3}>
              <p>Audio and Subtitles</p>
              <p>Media Center</p>
              <p>Privacy</p>
              <p>Contact Us</p>
            </Col>
            <Col sm={6} md={3}>
              <p>Audio Description</p>
              <p>Investor Relations</p>
              <p>Legal Notices</p>
            </Col>
            <Col sm={6} md={3}>
              <p>Help Center</p>
              <p>Jobs</p>
              <p>Cookie Preferences</p>
            </Col>
            <Col sm={6} md={3}>
              <p>Gift Cards</p>
              <p>Terms of Use</p>
              <p>Corporate Information</p>
            </Col>
          </Row>
          <Row>
            <Col xs={4} className='text-start'>
              <Button variant='outline-light' className='rounded-0'>
                Service Code
              </Button>
            </Col>
          </Row>
          <Row className='mt-2'>
            <Col xs={4} className='text-start text-secondary'>
              <p>© 1997-2022 Netflix, Inc.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default MyFooter;
