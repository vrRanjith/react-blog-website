import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { getAllPosts } from "../../apis/post.api"
import "./Home.css";
import { useLocation } from "react-router-dom";

function Home() {

  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPost = async () => {
      const posts = await getAllPosts(search)
      setPosts(posts)
    }

    fetchPost()
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
