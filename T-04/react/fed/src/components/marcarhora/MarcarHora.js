import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './MarcarHora.css'


const MarcarHora = ({ onUserSubmit }) => {
    let time = 0;
    
    function startTime() {
        let today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        m = checkTime(m);
        time = h + ":" + m;
        return time;
    }

    function checkTime(i){
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    return (
        <div>
            <form onSubmit={onUserSubmit}>
                <p class="relogio">{startTime()}</p>
                <div class="botao">
                    <input type="submit" class="btn btn-primary" value="Cadastrar" />
                </div>
            </form>
            
        </div>
    );
};

export default MarcarHora;