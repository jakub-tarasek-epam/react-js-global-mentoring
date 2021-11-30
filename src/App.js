import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Components - organisms
import Header from "./components/organisms/Header/Header";
import Footer from "./components/organisms/Footer/Footer";
import ErrorBoundary from "./components/organisms/ErrorBoundary";
import MovieList from "./components/organisms/MovieList/MovieList";
import MovieDetails from "./components/organisms/MovieDetails/MovieDetails";
import DeleteMovie from "./components/organisms/Modals/DeleteMovie/DeleteMovie";
import NotFound from './components/organisms/NotFound/NotFound';

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
          <BrowserRouter>
            <ErrorBoundary>
              {selectedMovie ? <MovieDetails /> : <Header />}
              <Switch>
                <Route path="/search/:searchQuery">
                  <MovieList />
                </Route>
                <Route path="/search">
                  <MovieList />
                </Route>
                <Redirect exact from="/" to="/search" />
                <Route>
                  <NotFound />
                </Route>
              </Switch>

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
          </BrowserRouter>
        </Container>
      </>
  );
}

export default App;
