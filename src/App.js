
import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notfound/NotFound';
import AddMovie from './components/addmovie/AddMovie';
import Alert from './components/alerts/Alert';

function App() {
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  const getMovies = async () => {

    try {
      const response = await api.get("/movies");
      // console.log(response.data);
      const moviesdata = response.data;
      setMovies(response.data);
      // console.log(moviesdata);
    } catch (error) {
      console.log(error);

    }

  }
  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      // console.log(movie);
      setReviews(singleMovie.reviewIds);
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getMovies();

  }, [])

  return (
    <>
      <div >

        <Header />
        {alert && <Alert alert={alert} />}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home movies={movies} />}>
            </Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>
            <Route path="Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} showAlert={showAlert} />}></Route>
            <Route path="/AddMovie" element={<AddMovie showAlert={showAlert} />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Route>
        </Routes>

      </div>
    </>
  );
}

export default App;
