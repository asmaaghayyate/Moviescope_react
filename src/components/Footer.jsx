
import React  from "react";

export default  function Footer(){
    return (
        <footer className="mt-5">
        <div className="">

            <p>&copy; {new Date().getFullYear()} Moviescope. Tous droits réservés.</p>
            <p>
            <a href="/about" className="">À propos</a> | 
            <a href="/contact" className=""> Contact</a>
            </p>


        </div>
        </footer>
    );
}


