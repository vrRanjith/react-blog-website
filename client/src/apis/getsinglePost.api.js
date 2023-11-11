import axios from "axios";

export async function getSinglePost(postId) {
    const res = await axios.get("/api/posts/" + postId)
    return res.data;    
}