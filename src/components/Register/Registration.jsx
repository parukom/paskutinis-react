import { useState } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [checked, setChecked] = useState(false);
  const agreementAgree = () => {
    setChecked(!checked);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    e.preventDefault();
    fetch("https://autumn-delicate-wilderness.glitch.me/v1/auth/register", {
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
        if (!res.err) {
          setEmail("");
          setPassword("");
          navigate("/login");
        } else {
          alert(res.err);
        }
      });
  };
  return (
    <section className="centruotas">
      <div className="registracijosDivas">
        <h1>Register</h1>
        <form onSubmit={handleInputChange}>
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />{" "}
          <br />
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />{" "}
          <br />
          {/* checkboxas */}
          <label htmlFor="agreement">
            I agree on all this shit by pressing button
          </label>
          <input
            style={{
              width: "20px",
              height: 20,
              marginLeft: 10,
            }}
            type="checkbox"
            name="agreement"
            id="agreement"
            onChange={agreementAgree}
          />
          <button type="submit" id="regsiterButton" disabled={!checked}>
            Register
          </button>
        </form>
      </div>
    </section>
  );
};
export default Registration;
