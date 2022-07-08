import "./Add.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Add = ({ loggedIn }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const updatesSomething = (e) => {
    e.preventDefault();
    fetch("https://autumn-delicate-wilderness.glitch.me/v1/content/skills", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        title,
        description,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setTitle("");
        setDescription("");
        alert(res.msg);
      })
      .catch((err) => console.log("errorasassdasas", err));
  };

  return (
    <>
      {loggedIn ? (
        <section className="addGifSection">
          <div className="blurrBackas">
            <div className="addGifMainDiv">
              <Link to="/">
                <button className="isjungti"> X</button>
              </Link>

              <h1>Add some stuff</h1>
              <form onSubmit={updatesSomething}>
                <label htmlFor="title">Title</label> <br />
                <input
                  type="text"
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Big massive title"
                />
                <br />
                <label htmlFor="description">Description</label> <br />
                <textarea
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  cols="67"
                  rows="10"
                  placeholder="Big massive description"
                ></textarea>
                <br />
                <button type="submit">ADD</button>
              </form>
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
              <Link className="span2" to="/registewr">
                REGISTER
              </Link>
            </span>
          </h1>
        </section>
      )}
    </>
  );
};
export default Add;
