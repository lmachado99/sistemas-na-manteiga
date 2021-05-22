import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import axios from "axios";

import MostrarHora from "./components/mostrarhora/MostrarHora";
import Menu from "./components/menu/Menu";
import MarcarHora from "./components/marcarhora/MarcarHora";
import Login from "./components/login/Login";

const Routes = () => {

  const [horarios, setPosts] = useState();

  useEffect(async () => {
    const response = await axios
      .get("http://localhost:3000/horario/mostrar")
      .catch((err) => console.log("Erro: ", err));

    setPosts(response.data);
  }, []);

  const onUserSubmit = (userInfo) => {
    userInfo.preventDefault();
    const marcarHora = {
      horario: new Date()
    };

    axios
      .post("http://localhost:3000/horario/marcar", marcarHora)
      .then(() => {
        alert("Hora logada com sucesso");
        document.location.reload();
      })
      .catch((err) => {
        alert("Sistema indisponível no momento.");
        console.log("Erro: ", err);
        document.location.reload();
      });

      
  };

  return (
    <Switch>
      <Redirect from="/" to="/login" exact />

      <Route path="/menu" exact>
        <Menu/>
      </Route>

      <Route path="/horario/marcar" exact>
        <MarcarHora onUserSubmit={onUserSubmit} />
      </Route>

      <Route path="/horario/mostrar" exact>
        <MostrarHora horarios={horarios}/>
      </Route>

      <Route path="/login" exact>
        <Login />
      </Route>

      <Route render={() => <div> Página não encontrada </div>} />
    </Switch>
  );
};

export default Routes;
