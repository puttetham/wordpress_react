import React, { Component } from 'react';

import HeaderComponent from '../components/Header/Header.component';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      overlayOpen: false,
    }
  }
  
componentDidMount() {
    let dataURL = "http://localhost:8888/wordpress_react/wp-json/wp/v2/movies?_embed/";
    fetch(dataURL)
      .then(res => res.json())
      
      .then(res => {
        console.log(res);
        this.setState({
          movies: res
        })
      })
      
  }

render() {

  const menuClick = () => {
    this.setState({
      overlayOpen: true,
    })
  };

  const menuClose = () => {
    this.setState({
      overlayOpen: false,
    })
  };

  let movies = this.state.movies.map((movie, index) => {
    return <div key={index}>
   
    <p><strong>Title:</strong> {movie.title.rendered}</p>
    {/* <p><strong>Release Year:</strong> {movie.acf.release_year}</p>
    <p><strong>Rating:</strong> {movie.acf.rating}</p>
    <img src={movie.acf.image} alt="" />
    <div><strong>Description:</strong><div dangerouslySetInnerHTML={ {__html: movie.acf.description} } /></div> */}
    </div>
  });
return (
      <div className="main">
        <HeaderComponent menuClick={menuClick} menuClose={menuClose} overlayOpen={this.state.overlayOpen} />
        <h2 >Movies</h2>
        {movies}
      </div>
    )
  }
}
export default Main;