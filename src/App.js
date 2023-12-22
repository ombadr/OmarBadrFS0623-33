import './styles/styles.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Dropdown from 'react-bootstrap/Dropdown';
import MyNavbar from './components/MyNavbar';
import MyMovieGallery from './components/MyMovieGallery';
import MyFooter from './components/MyFooter';
import { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieGallery1: [],
      movieGallery2: [],
      movieGallery3: [],
    }
    this.getMovies = this.getMovies.bind(this)
  }

  BASE_URL = 'http://www.omdbapi.com/?apikey=dbd9d8ad'


  getMovies() {

    const searchQueries = ['spider', 'batman', 'godfather']

    searchQueries.forEach((query, i) => {
      fetch(`${this.BASE_URL}&s=${query}`).then(res => res.json()).then(data => {
        if (i === 0) {
          this.setState({ movieGallery1: data.Search });
        } else if (i === 1) {
          this.setState({ movieGallery2: data.Search });
        } else if (i === 2) {
          this.setState({ movieGallery3: data.Search });
        }
      })
        .catch(err => console.log('Error: ', err))
    })

  }


  componentDidMount() {
    this.getMovies()
  }

  render() {
    return (
      <div className="App">
        <MyNavbar />
        <div className='d-flex justify-content-between text-white'>
          <div className='d-flex align-items-center'>
            <h1 className='mx-3'>TV Shows</h1>
            <Dropdown>
              <Dropdown.Toggle

                id="dropdownMenuButton"
                className="btn-secondary btn-sm dropdown-toggle rounded-0 bg-dark"
              >
                Genres
              </Dropdown.Toggle>
              <Dropdown.Menu >
                <Dropdown.Item href="#/action-1">Genre 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Genre 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Genre 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="text-white me-3 d-flex align-items-center">
            <i className="bi bi-grid-fill fs-3 p-2"></i>
            <i className="bi bi-grid-3x3-gap-fill fs-3 p-2"></i>
          </div>
        </div>

        {/* TRENDING NOW MOVIE GALLERY */}
        <div className='mt-3'>
          <h3 className='text-start mx-3 text-white'>Trending Now</h3>
          <MyMovieGallery movies={this.state.movieGallery1} />
        </div>

        {/* WATCH IT AGAIN MOVIE GALLERY */}
        <div className='mt-3'>
          <h3 className='text-start mx-3 text-white'>Watch It Again</h3>
          <MyMovieGallery movies={this.state.movieGallery2} />
        </div>

        {/* NEW RELEASES MOVIE GALLERY */}
        <div className='mt-3'>
          <h3 className='text-start mx-3 text-white'>Watch It Again</h3>
          <MyMovieGallery movies={this.state.movieGallery3} />
        </div>



        {/* FOOTER */}

        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>

          <MyFooter />
        </div>

      </div>
    )
  }
}


export default App;
