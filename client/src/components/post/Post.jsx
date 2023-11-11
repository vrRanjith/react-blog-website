import "./Post.css";
import {Link} from "react-router-dom";

function Post({post}) {

  const PF = "http://localhost:8000/images/"
  return (
    <div className="post">
    {post.photo && 
      <img
        className="post-img"
        src={PF + post.photo}
        alt="post image"
      />
    }

      <div className="post-info">
        <div className="post-categories">
          {
            post.categories.map(category => (
              <span className="post-cat">{category}</span>
            ))
          } 
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="post-title">{post.title}</span>
        </Link>
        
        <hr />
        <span className="post-date">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="post-desc">
        {post.desc}
      </p>
    </div>
  );
}

export default Post;
