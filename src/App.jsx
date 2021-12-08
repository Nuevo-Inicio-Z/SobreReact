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
                <li className="breedCard">
                    <div className="contenedorImagen">
                         <img src={fpsimagen} alt="FPS"/>
                    </div>
                    <span className="breedTitle">
                        Shooter
                    </span>
                    <div>
                        <ul className="movWeb">
                            <li>
                                <div>
                                    <button className="botonesWeb">
                                        <span className="colorLikes"><i class="fas fa-heart"></i></span>
                                        <span className="textoInforme">150</span> 
                                        
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button className="botonesWeb">
                                        <span className="colorIconsCard"><i class="fas fa-comment"></i></span>
                                        <span className="textoInforme">1.5K</span>
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button className="botonesWeb">
                                        <span className="colorIconsCard"><i class="far fa-eye"></i></span>
                                        <span className="textoInforme">120</span>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={carreraimagen} alt="carreras"/>
                    </div>
                    <span className="breedTitle">
                        Racing
                    </span>
                    <div>
                        <ul className="movWeb">
                            <li>
                                <div>
                                    <button className="botonesWeb">
                                        <span className="colorLikes"><i class="fas fa-heart"></i></span>
                                        <span className="textoInforme">450</span> 
                                        
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button className="botonesWeb">
                                        <span className="colorIconsCard"><i class="fas fa-comment"></i></span>
                                        <span className="textoInforme">1.1K</span>
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button className="botonesWeb">
                                        <span className="colorIconsCard"><i class="far fa-eye"></i></span>
                                        <span className="textoInforme">850</span>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={aventuraimagen} alt="Aventuras"/>
                    </div>
                    <span className="breedTitle">
                        Aventuras
                    </span>
                    <div>
                        <ul className="movWeb">
                            <li>
                                <div>
                                    <button className="botonesWeb">
                                        <span className="colorLikes"><i class="fas fa-heart"></i></span>
                                        <span className="textoInforme">300</span> 
                                        
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button className="botonesWeb">
                                        <span className="colorIconsCard"><i class="fas fa-comment"></i></span>
                                        <span className="textoInforme">1.5K</span>
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button className="botonesWeb">
                                        <span className="colorIconsCard"><i class="far fa-eye"></i></span>
                                        <span className="textoInforme">300</span>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </section>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
