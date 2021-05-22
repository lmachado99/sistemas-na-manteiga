import React, { PureComponent, Fragment } from "react";
import "./Login.css";

class Login extends PureComponent {
  render() {
    return (
      <Fragment>
        <div class="form-group container-fluid">
          <form>
            <div class="row col-md-12 ">
              <div class="form-group col-md-6 offset-md-5">
                <div class="input-group">
                  <input type="text" id="email" placeholder="Login" />
                </div>
              </div>
            </div>
            <div class="row col-md-12">
              <div class="input-group col-md-6 offset-md-5">
                <input type="password" id="senha" placeholder="Digite uma senha" />
              </div>
            </div>
            <div>
              <br />
            </div>
            <button type="button" className="btn-default btn-primary">
              Acessar
              </button>
          </form>
        </div>

      </Fragment>
    );
  }
}

export default Login;