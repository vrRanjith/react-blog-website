import "./Write.css";
import axios from "axios";
import {Context} from "../../context/Context";
import { useContext, useState } from "react";

function Write() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const {user} = useContext(Context);

  const handlClick = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };

   
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name
      data.append("name", filename)
      data.append("file", file)
      console.log(`photo filename ${filename}`)
      newPost.photo = filename
      try {
        await axios.post("/api/upload", data)
      } catch (err) {}
  
    }

    try {
      const res = await axios.post("/api/posts", newPost)
      window.location.replace("/post/" + res.data._id)
    } catch (err) {
        console.log(err)
    }
  }


  return (
    <div className="write">
      {file && <img
        className="write-img"
        src={URL.createObjectURL(file)}
        alt="blog image"
      />}
      <form className="write-form" onSubmit={handlClick}>
        <div className="write-form-group">
          <label htmlFor="fileInput">
            <i className="write-icon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])}/>
          <input
            type="text"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="write-form-group">
          <textarea
            type="text"
            placeholder="Write your BloG..."
            className="write-input write-text"
            onChange={e => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="write-submit" type="submit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
