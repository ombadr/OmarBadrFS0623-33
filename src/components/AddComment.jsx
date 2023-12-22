import React from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';

class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieComment: {
        comment: '',
        rate: '1',
        elementId: props.movieId,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(property, value) {
    this.setState({
      movieComment: {
        ...this.state.movieComment,
        [property]: value,
      },
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(this.state.movieComment),
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZjAyODBkOGEyMDAwMThhNDhiMmYiLCJpYXQiOjE3MDMxNjA3MTAsImV4cCI6MTcwNDM3MDMxMH0.BtXNd6xIEcoxpQ6JWiLh8hmtaKgbDZi8RkyAJUi98Jw',
          },
        }
      );

      if (res.ok) {
        this.setState({
          movieComment: {
            comment: '',
            rate: '1',
            elementId: this.props.imdbID,
          },
        });
      } else {
        throw new Error('Errore nel salvataggio del commento');
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Insert your comment'
                  value={this.state.movieComment.comment}
                  onChange={(e) =>
                    this.handleInputChange('comment', e.target.value)
                  }
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Rate</Form.Label>
                <Form.Select
                  aria-label='Rate'
                  required
                  value={this.state.movieComment.rate}
                  onChange={(e) => {
                    this.handleInputChange('rate', e.target.value);
                  }}
                >
                  <option selected>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>imdbID</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='imdbID'
                  value={this.state.movieComment.elementId}
                  onChange={(e) =>
                    this.handleInputChange('elementId', e.target.value)
                  }
                ></Form.Control>
              </Form.Group>
              <Button variant='primary' type='submit' className='my-3'>
                Add Comment!
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddComment;
