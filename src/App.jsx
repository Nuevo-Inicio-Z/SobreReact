import './styles/Styles.css';
import logozetien from './media/zetien gamer logo beta.png'
import fpsimagen from './media/fps.jpg'
import carreraimagen from './media/racing.jpg'
import aventuraimagen from './media/aventuras.jpg'

function App() {
  return (
    <div className="App">
     <header>
       <ul className="navbar">
           <li>
            <img src={logozetien} alt="logo" className="logo"/>
           </li>
           <li>
            <button className="button mainbutton">Nuevo Post</button> 
           </li>
           <li>
            <div className="buscar">
             <input placeholder="Buscar un Juego" />
             <i className="fas fa-search button iconoBusqueda"></i>
            </div>
           </li>
            <li>
            <button className="button secondarybutton">login</button>
           </li>
           <li>
            <button className="button mainbutton">Registro</button>  
           </li>
            
        </ul> 
    </header>
    <main>
        <section>
            <span className="mainTitle">
              <h1>Tipos De Videojuegos</h1>
            </span>
            
            <ul class="breedCardContainer">
                <CardJuegos nombreJuego="FPS" imagen={fpsimagen} like="150" coment="1.5k" visto="120"/>
                <CardJuegos nombreJuego="Carreras" imagen={carreraimagen} like="450" coment="1.1k" visto="850"/>
                <CardJuegos nombreJuego="Aventuras" imagen={aventuraimagen} like="300" coment="1.8k" visto="250"/>
            </ul>
        </section>
        <section></section>
    </main>
    <footer>
        
    </footer>
    </div>
  );
}

function CardJuegos({nombreJuego, imagen,like, coment, visto}) {
    return (
        <li className="breedCard">
        <div className="contenedorImagen">
             <img src={imagen} alt="ImagenInfo"/>
        </div>
        <span className="breedTitle">{nombreJuego}</span>
        <div>
            <ul className="movWeb">
                <li>
                    <div>
                        <button className="botonesWeb">
                            <span className="colorLikes"><i class="fas fa-heart"></i></span>
                            <span className="textoInforme">{like}</span> 
                            
                        </button>
                    </div>
                </li>
                <li>
                    <div>
                        <button className="botonesWeb">
                            <span className="colorIconsCard"><i class="fas fa-comment"></i></span>
                            <span className="textoInforme">{coment}</span>
                        </button>
                    </div>
                </li>
                <li>
                    <div>
                        <button className="botonesWeb">
                            <span className="colorIconsCard"><i class="far fa-eye"></i></span>
                            <span className="textoInforme">{visto}</span>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </li>
    );
       
    
}
export default App;
