import axios from "axios";

export async function UpdatePost(post, title, desc) {
    try {
        await axios.put("/api/posts/" + post._id, {username: user.username, title, desc})
    }
    catch (err) {
        console.log(err)
    }
}