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
export default CardJuegos