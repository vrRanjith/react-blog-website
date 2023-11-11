import { useContext, useEffect, useState } from "react";
import "./SinglePost.css";
import {Link, useLocation} from "react-router-dom";
import {getSinglePost} from "../../apis/getsinglePost.api";
import { Context } from "../../context/Context";
import {deletePost} from "../../apis/deletePost.api";
import {UpdatePost} from "../../apis/updatePost.api"


function SinglePost() {

  // useLocation hook to get the id from the url path
  const fullPath = useLocation()
  const postId = fullPath.pathname.split("/")[2]

  const [post, setPost] = useState({})
  const {user} = useContext(Context)

  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  
  useEffect(() => {
    const getPost = async () => {
      // api call
      const postData = await getSinglePost(postId)
      setPost(postData)
      setTitle(postData.title)
      setDesc(postData.desc)
    }
    if (!post || post._id !== postId) {
      getPost()
    }
  }, [post]);


  const handleDelete = async () => (
    //delete post api call
    deletePost(post, user)
    )

  const handleUpdate = async () => {
    UpdatePost(post, title, desc)
    setEditMode(false)

  }

  const PF = "http://localhost:8000/images/"
  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        {post.photo && <img
          className="single-post-image"
          src={PF + post.photo}
          alt="single post image"
        />
        }

        {editMode ? (<input className="single-post-title-input" autoFocus value={title} onChange={(e) => setTitle(e.target.value)}/>) : 
          (
            <h1 className="single-post-title">
            {title}
            {
              post.username === user?.username && 
              <div className="sinlge-post-edit">
              <i className="single-post-icon fa-regular fa-pen-to-square" onClick={() => setEditMode(true)}></i>
              <i className="single-post-icon fa-solid fa-trash" onClick={handleDelete}></i>
            </div>
            }
            </h1>
          )
        }



        <div className="sinlge-post-info">
          <span className="single-post-author">
            Author: 
            { 
              <Link to = {`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
              </Link>
            }
          </span>
          <span className="single-post-Date">{new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {
          editMode ? (<textarea className="single-post-desc-input" value={desc} onChange={(e) => setDesc(e.target.value)}/>) :
          (
            <p className="single-post-desc">
                {desc}
            </p>
          )
        }

        {editMode && <button className="single-post-update-button" onClick={handleUpdate}>update</button>}  
        
      </div>
    </div>
  );
}

export default SinglePost;
