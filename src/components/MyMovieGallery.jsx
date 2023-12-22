import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CommentModal from './CommentModal';

class MyMovieGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedMovie: null,
    };

    this.handleSelectedMovie = this.handleSelectedMovie.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleSelectedMovie(movie) {
    this.setState({ showModal: true, selectedMovie: movie });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Container fluid>
        <Row>
          {this.props.movies.map((movie) => {
            return (
              <Col
                sm={6}
                md={3}
                lg={2}
                key={movie.imdbID}
                onClick={() => this.handleSelectedMovie(movie)}
              >
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className='img-fluid'
                />
              </Col>
            );
          })}
        </Row>

        {this.state.selectedMovie && (
          <CommentModal
            show={this.state.showModal}
            movie={this.state.selectedMovie}
            onClose={this.handleCloseModal}
          />
        )}
      </Container>
    );
  }
}

export default MyMovieGallery;
