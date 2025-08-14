import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";  // <-- ajoute ceci
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({movies}) {

    const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

const handleSearch = (e) => {
    const titre = e.target.value;
    setSearch(titre);

    // Si champ pas vide, on redirige vers la page résultats
    if (titre.trim() !== "") {
      navigate(`/moviesrcherches/${titre}`);
    } else {
      navigate("/");
    }
  };

  return (
      <>

  <header className="navbar">
    <div className="logoburger">

     <div className="logo">MovieScope</div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </div>
     

       <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><Link  className="nav-link" to="/">Accueil</Link></li>
        <li><Link className="nav-link" to="/about">À propos</Link></li>
      </ul>
       <form className="form" role="search" >
             <input
              className="search"
              type="search"
              value={search}
              onChange={handleSearch}

              placeholder="Rechercher un film..."
            />
          </form>
    </header>
    

</>
  );
}
