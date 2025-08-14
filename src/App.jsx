import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import DetailFilm from './components/DetailFilm';
import { useEffect } from 'react';
import * as XLSX from "xlsx";
import About from './components/About';
import ListFilmRecherche from './components/ListFilmRecherche';

  function App() {
  const [count, setCount] = useState(0)
const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchExcel = async () => {
      const response = await fetch("/movies.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });

      // Supposons que les données sont dans la première feuille
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      // Convertir la feuille en JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      setMovies(jsonData);
    };

    fetchExcel();
  }, []);






  return (
  <Router>
          <div className="app-container"> {/* <-- ici */}

     <Navbar/>
     <div className='main-content'>
    <Routes>

      <Route path="/" element={<Home movies={movies}></Home>} />
      <Route path="/movie/:id" element={<DetailFilm  movies={movies}/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/moviesrcherches/:titre" element={<ListFilmRecherche movies={movies}/>} />
    </Routes>
    </div>
    <Footer/>
    </div>
    </Router>
  )
}

export default App
