
import { Link } from "react-router-dom";
import Listfilm from "./Listfilm";


export default function Home({movies}){


return(
<>
    <img 
     src={`images/Home.jpg`} 
     alt="Espace de travail" 
     className="hero-image" 
   />
   
   <Listfilm movies={movies}></Listfilm>

   
       </>
)

};