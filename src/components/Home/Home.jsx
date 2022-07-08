import "./Home.css";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

const HomePage = ({ loggedIn, data }) => {
  return (
    <>
      {loggedIn ? (
        <section className="homeLoggedInSection">
          <div className="homeMidDiv">
            <Modal />
            <h2>Welcome to our gif lab</h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {data.map((title, id) => (
                <div className="gifukai" key={id}>
                  <p>{title.title}</p>
                  <img src={title.link} alt={title.title} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="homeMainSection">
          <h1>
            She will never catch this carrot, so please, just{" "}
            <span>
              <Link className="span1" to="/login">
                LOGIN
              </Link>
            </span>{" "}
            or{" "}
            <span>
              <Link className="span2" to="/register">
                REGISTER
              </Link>
            </span>
          </h1>
        </section>
      )}
    </>
  );
};

export default HomePage;
