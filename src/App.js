import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";

//Components - organisms
import Header from "./components/organisms/Header/Header";
import Footer from "./components/organisms/Footer/Footer";
import ErrorBoundary from "./components/organisms/ErrorBoundary";
import MovieList from "./components/organisms/MovieList/MovieList";
import MovieDetails from "./components/organisms/MovieDetails/MovieDetails";
import DeleteMovie from "./components/organisms/Modals/DeleteMovie/DeleteMovie";

import { Container } from "react-bootstrap";
import GlobalStyle from "./theme/globalStyle";
import MovieModal from "components/organisms/Modals/MovieModal/MovieModal";

import { hideDeleteModal } from 'state/DeleteMovieSlice';
import { hideEditMovieModal } from 'state/EditMovieSlice';
import { hideAddMovieModal } from 'state/AddMovieSlice';
import { fetchMovies, createMovie, updateMovie, deleteMovie } from 'state/MoviesSlice';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchMovies());

  const selectedMovie = useSelector((state) => state.selectedMovie.value);
  const editMovie = useSelector((state) => state.editMovie.value);
  const removeMovie = useSelector((state) => state.deleteMovie.value);
  const addMovie = useSelector((state) => state.addMovie.value);

  return (
      <>
        <GlobalStyle />
        <Container className="containerSettings">
          <ErrorBoundary>
            {selectedMovie ? <MovieDetails /> : <Header />}
            <MovieList />
          </ErrorBoundary>
          <Footer />
          {removeMovie && <DeleteMovie 
            movieData={removeMovie} 
            handleHide={() => { dispatch(hideDeleteModal()); }} 
            handleSubmit={(movie) => { 
              dispatch(hideDeleteModal()); 
              dispatch(deleteMovie(movie));
            }}
          />}          
          {editMovie && <MovieModal 
            movieData={editMovie} 
            handleHide={() => { dispatch(hideEditMovieModal()); }} 
            handleSubmit={(movie) => { 
              dispatch(hideEditMovieModal()); 
              dispatch(updateMovie(movie));
            }} 
          />}
          {addMovie && <MovieModal 
            movieData={{}} 
            handleHide={() => { dispatch(hideAddMovieModal()); }} 
            handleSubmit={(movie) => { 
              dispatch(hideAddMovieModal());
              dispatch(createMovie(movie));
            }} 
          />}
        </Container>
      </>
  );
}

export default App;
