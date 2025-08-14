
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/ListFilm.module.css"; // ✅ Import du CSS Module


export default function Listfilm({movies}){


    return (

<div className={styles.list}>
      {movies.map((movie) => (
        <div key={movie.id} className={styles.carte}>
            <img src={movie.image_url} alt="Film 1" className={styles.carteimage} />
            <div className={styles.cartecontenu}>
           
                <h3 className={styles.cartetitre} >{movie.title}</h3>
                          <strong>{movie.prix} MAD</strong> 

                <Link
                    to={`/movie/${movie.id}`}
                    className={styles.btnvoirplus}
                  >
                    Voir plus
                  </Link>
            </div>
        </div>
          ))}
</div> 
 
 


 

    )
}