
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/DetailFilm.module.css"; // ✅ Import du CSS Module

export default function DetailFilm({movies}){
    const { id } = useParams();
    
  const movie = movies.find(a => String(a.id) === id);

  if (!movie) {
    return <p>Chargement du film ou film introuvable...</p>;
  }

  const ratingSur5 = (movie.rating / 2).toFixed(1);

    return (

       <div className={styles.detailfilm}>
  <img 
    src={movie.image_url} 
    alt={movie.title} 
    className={styles.carteimage} 
  />
  
  <div className={styles.info}>
    <h2>{movie.title}</h2>
    <p>Année : {movie.year}</p>
    <p className={styles.prix}>Prix : {movie.prix} MAD</p>
    <p>Note :  {"⭐".repeat(Math.round(ratingSur5))} ({ratingSur5}/5)
</p>
    <p>
        
{movie.detail
      .split(' ')
      .slice(0, 150) // 20 mots
      .join(' ')
  }
  {movie.detail.split(' ').length > 20 ? '...' : ''}

    </p>
  </div>
</div>

        
    );
}