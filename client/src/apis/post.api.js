import axios from "axios";

export async function getAllPosts(search) {
	const res = await axios.get("/api/posts/" + search)
	return res.data;
}