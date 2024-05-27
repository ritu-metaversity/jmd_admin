import { IoMdPerson } from "react-icons/io";
import { MdLock } from "react-icons/md";
import './login.scss'

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="logo">
          <a href="">
            <img src="https://admin.jmd11.com/assets/img/jmd-login-Logo.png" />
          </a>
        </div>
        <div className="card">
          <div className="body">
            <form
              name="BetPlayer"
              method="post"
              className="ng-dirty ng-touched ng-valid">
              <div className="msg">Sign in</div>
              <div className="msg" />
              <div className="input-group">
                <span className="input-group-addon">
                <IoMdPerson />
                </span>
                <div className="form-line">
                  <input
                    placeholder="Username"
                    name="username"
                    id="loginSection-username"
                    type="text"
                    className="form-control ng-dirty ng-valid ng-touched"
                  />
                </div>
              </div>
              <div className="input-group">
                <span className="input-group-addon">
                  <MdLock />
                </span>
                <div className="form-line">
                  <input
                    name="password"
                    id="loginSection-password"
                    defaultValue=""
                    type="password"
                    placeholder="Password"
                    className="form-control ng-dirty ng-valid ng-touched"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-4">
                    <button id="login-btn" className="btn login_btn btn-block bg-pink waves-effect">Login</button>    
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
