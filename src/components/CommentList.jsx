import React from 'react';
import {
  Container,
  Row,
  Col,
  ListGroup,
  Spinner,
  Button,
  Alert,
} from 'react-bootstrap';
class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };

    this.getComments = this.getComments.bind(this);
  }

  getComments(id) {
    fetch(`https://striveschool-api.herokuapp.com/api/books/${id}/comments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZjAyODBkOGEyMDAwMThhNDhiMmYiLCJpYXQiOjE3MDMxNjA3MTAsImV4cCI6MTcwNDM3MDMxMH0.BtXNd6xIEcoxpQ6JWiLh8hmtaKgbDZi8RkyAJUi98Jw',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Errore nel recupero dei commenti');
        }
      })
      .then((data) => {
        console.log('Commenti: ', data);
        this.setState({ comments: data });
      })
      .catch((err) => {
        console.log('Errore: ', err);
      });
  }

  componentDidMount() {
    this.getComments(this.props.movieId);
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <ListGroup>
                {this.state.comments.map((comment) => (
                  <div
                    key={comment._id}
                    className='border border1 rounded m-2 p-2'
                  >
                    <p className='mb-0'>Comment: {comment.comment}</p>
                    <p className='mb-0'>Rate: {comment.rate}</p>
                    <p className='mb-0'>Author: {comment.author}</p>
                  </div>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default CommentList;
