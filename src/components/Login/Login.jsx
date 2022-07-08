import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const prisijungti = async (e) => {
    e.preventDefault();
    await fetch("https://autumn-delicate-wilderness.glitch.me/v1/auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.err) {
          alert(res.err);
        }
        if (res.token) {
          localStorage.setItem("token", res.token);
          setLoggedIn(true);
          navigate("/");
        }
      });
  };

  return (
    <section className="centruotas">
      <div className="loginDivas">
        <h1>Login</h1>
        <form onSubmit={prisijungti}>
          <label htmlFor="email">Email or nickname</label> <br />
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <button>Login</button>
        </form>
      </div>
    </section>
  );
};
export default Login;
