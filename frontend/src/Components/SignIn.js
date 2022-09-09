import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/action/Authaction";
import "./SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  return (
    <div className="home">
      <meta charSet="UTF-8" />
      <title>CodePen - Sign up / Login Form</title>
      <link rel="stylesheet" href="./style.css" />
      {/* partial:index.partial.html */}
      <title>Slide Navbar</title>
      <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
        rel="stylesheet"
      />
      <div className="main">
        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true" className="labl">
              Login
            </label>
            <input
              type="email"
              name="email"
              className="inpt"
              placeholder="Email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <input
              type="password"
              className="inpt"
              name="pswd"
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault(e);
                dispatch(login({ email, password }, Navigate));
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      {/* partial */}
    </div>
  );
}
export default SignIn;
