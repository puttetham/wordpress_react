import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }
componentDidMount() {
    let dataURL = "http://localhost:8888/wordpress_react/wp-json/wp/v2/movies?_embed/";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          movies: res
        })
      })
  }
render() {
  let movies = this.state.movies.map((movie, index) => {
    return <div key={index}>
   
    <p><strong>Title:</strong> {movie.title.rendered}</p>
    <p><strong>Release Year:</strong> {movie.acf.release_year}</p>
    <p><strong>Rating:</strong> {movie.acf.rating}</p>
    <div><strong>Description:</strong><div dangerouslySetInnerHTML={ {__html: movie.acf.description} } /></div>
    </div>
  });
return (
      <div>
        <h2>Movies</h2>
        {movies}
      </div>
    )
  }
}
export default App;
