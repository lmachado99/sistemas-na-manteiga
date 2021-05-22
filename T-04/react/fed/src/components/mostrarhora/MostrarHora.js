import React from 'react';
import './MostrarHora.css';

const MostrarHora = ({ horarios }) => {
    let entrada = true;
    let dia;
    let mes;
    let ano;
    let horaEntrada;
    let minutoEntrada;
    let horaSaida;
    let minutoSaida;

    return (
        <div>
            <table class="tabela" align="center">
                <tr class="titulo">
                    <td>Data</td>
                    <td>Entrada</td>
                    <td>Saída</td>
                </tr>
                {
                    horarios?.map(name => {
                        let horario = new Date(name.horario)

                        if (entrada) {
                            horaEntrada = horario.getHours();
                            minutoEntrada = horario.getMinutes();
                            dia = horario.getDate();
                            mes = horario.getMonth() + 1;
                            ano = horario.getFullYear();
                            entrada = false;

                            if (dia < 10) {
                                dia = "0" + dia;
                            }

                            if (mes < 10) {
                                mes = "0" + mes;
                            }

                        } else {
                            horaSaida = horario.getHours();
                            minutoSaida = horario.getMinutes();
                            entrada = true;

                            if (horaEntrada < 10) {
                                horaEntrada = "0" + horaEntrada;
                            }
                
                            if (minutoEntrada < 10) {
                                minutoEntrada = "0" + minutoEntrada;
                            }

                            if (horaSaida < 10) {
                                horaSaida = "0" + horaSaida;
                            }
                
                            if (minutoSaida < 10) {
                                minutoSaida = "0" + minutoSaida;
                            }

                            return(
                                <tr>
                                    <td>{dia + "/" + mes + "/" + ano}</td>
                                    <td>{horaEntrada + ":" + minutoEntrada}</td>
                                    <td>{horaSaida + ":" + minutoSaida}</td>
                                </tr>
                            )
                        }        
                    })
                }
            </table>
        </div>
    );
};

export default MostrarHora; 
