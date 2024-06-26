import { IoMdPerson } from "react-icons/io";
import { MdLock } from "react-icons/md";
import './login.scss'
import { useLoginMutation } from "../../app/apis/mainApi/mainApislice";
import { useNavigate } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../app/features/auth/authSlice";
import snackbarUtil from "../../utils/snackbar";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginCreadentials, setLoginCreadentials] = useState({
    userId: '',
    password: '',
    url: window.location.hostname
  });
  const [trigger, { data: LoginData }] = useLoginMutation();

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginCreadentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handlerSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      await trigger(loginCreadentials).unwrap();
    } catch (error) {
      console.error(`failed to login ${error}`);
    }
  }

  useEffect(() => {
    if (LoginData) {
      if (LoginData?.status === false) {
        snackbarUtil.error(LoginData?.message)
        return
      } else if (LoginData.token) {
        dispatch(login(LoginData));
        snackbarUtil.success('Login Successfull')
        navigate('/main')
      }
    }
  }, [LoginData])

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
              onSubmit={handlerSubmit}
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
                    onChange={handlerChange}
                    placeholder="Username"
                    name="userId"
                    value={loginCreadentials?.userId}
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
                    onChange={handlerChange}
                    name="password"
                    id="loginSection-password"
                    value={loginCreadentials?.password}
                    type="password"
                    placeholder="Password"
                    className="form-control ng-dirty ng-valid ng-touched"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-4">
                  <button
                    id="login-btn" className="btn login_btn btn-block bg-pink waves-effect">Login</button>
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
