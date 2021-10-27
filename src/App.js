import React, { useState } from "react";
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
import { moviesData } from "./data/moviesData";
import { AppContext } from "./context/context";
import MovieModal from "components/organisms/Modals/MovieModal/MovieModal";

function App() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [editableMovie, setEditableMovie] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const contextData = {
    movies: [...moviesData],
    filteredMovies,
    setFilteredMovies,
    showDeleteModal,
    setShowDeleteModal,
    showMovieModal,
    setShowMovieModal,
    selectedMovie,
    setSelectedMovie,
    editableMovie,
    setEditableMovie,
  };

  console.log(selectedMovie);

  return (
    <AppContext.Provider value={contextData}>
      <>
        <GlobalStyle />
        <Container className="containerSettings">
          <ErrorBoundary>
            {contextData.selectedMovie ? <MovieDetails /> : <Header />}
            <MovieList />
          </ErrorBoundary>
          <Footer />
          <DeleteMovie />
          <MovieModal />
        </Container>
      </>
    </AppContext.Provider>
  );
}

export default App;
