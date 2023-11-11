import axios from "axios";

export async function getCategories() {
    const res = await axios.get("/api/categories")
    return res.data;
}