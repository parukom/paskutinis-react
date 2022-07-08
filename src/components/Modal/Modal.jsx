import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 720,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  margin: 0,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [data, setData] = useState();
  const navigate = useNavigate();
  const addGif = async (e) => {
    e.preventDefault();
    const gifas = {
      title: e.target.title.value,
      link: e.target.link.value,
    };
    await fetch("http://localhost:8080/gifs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(gifas),
    })
      .then(() => setData(gifas))
      .then(() => navigate("/home", { replace: true }))
      .then(() => navigate("/", { replace: true }))
      .catch((error) => console.log(error));
  };
  //

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          fontSize: "2rem",
          color: "black",
          border: "2px dashed pink",
          backgroundColor: "rgba(255, 192, 203, 0.753)",
        }}
      >
        Add gifs
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Never gonna give you up
          </Typography>
          <form onSubmit={addGif}>
            <label htmlFor="title">Title</label> <br />
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Big massive title"
            />
            <br />
            <input
              value={link}
              type="url"
              name="link"
              onChange={(e) => setLink(e.target.value)}
              placeholder="Big massive GIF"
            />
            <button type="submit">ADD</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
