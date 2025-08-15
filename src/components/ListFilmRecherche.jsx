import { Link, useParams } from "react-router-dom";
import styles from "../styles/ListFilm.module.css"; // ✅ Import du CSS Module

export default  function ListFilmRecherche({movies}){


     const { titre } = useParams();

  const filteredMovies = movies.filter((movie) =>
    movie.title?.toLowerCase().includes(titre.toLowerCase())
  );


return(

<div className={titre?.trim() ? styles.listrech : styles.list}>

{filteredMovies.length > 0 ? (

      filteredMovies.map((movie) => (
        <div key={movie.id} className={titre?.trim() ? styles.carterech : styles.carte}>
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
          )) 
    
    
    ): (
        <div className={styles.message}>
         <strong>Cherchez-vous quelque chose en particulier ?</strong> 
    Malheureusement, nous n'avons pas trouvé de résultat correspondant à votre recherche.
          </div>
      )
      
      }



</div> 
);
}