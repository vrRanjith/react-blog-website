import "./Settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import {Context} from "../../context/Context";
import {useState, useContext} from "react";
import axios from "axios";

function Settings() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const {user, dispatch} = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "UPDATE_START"})
    const updatedUser = {
      userID: user._id,
      username,
      email,
      password 
    }
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        // update user profile api call
        await axios.post("/api/upload", data)
      } catch (err) {}
    } 
    try {
      const res = await axios.put("/api/users/"+user._id, updatedUser)
      dispatch({type: "UPDATE_SUCCESS", payload: res.data})
      setSuccess(true)
    } catch (err) {
      dispatch({type: "UPDATE_FAILURE"})
    }
  }

  const PF = "http://localhost:8000/images/"
  
  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="settings-update-title">Update Account</span>
          <span className="settings-delete-title">Delete Account</span>
        </div>
        <form className="settings-form" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settings-profpic">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="fileinput">
              <i className="profile-pic-icon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileinput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])}/>
          </div>
          <label>User-Name</label>
          <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)} />
          <label>Email</label>
          <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)}/>
          <label>Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
          <button className="settings-submit" type="submit">Update</button>
          { success && 
            (<span style={{color:"green", textAlign:"center", marginTop:"10px"}}>Profile has been Updated...</span>)
            }
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
