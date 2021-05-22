import React from 'react';
import './Menu.css';
import imagemBaterPonto from '../../img/relogio-bater-ponto.png'
import imagemConsultarPonto from '../../img/relogio-consultar-ponto.png'
import { Link } from "react-router-dom";

const Menu = () => {

    return (
        <div class="botoes">
            <Link to="/horario/marcar" class="link">
                <div class="quadrado-bater-ponto">
                    <img src={imagemBaterPonto}/>
                </div>
            </Link>
            <Link to="/horario/mostrar" class="link">
                <div class="quadrado-consultar-ponto">
                    <img src={imagemConsultarPonto}/>
                </div>
            </Link>
        </div>
    );
};

export default Menu;
