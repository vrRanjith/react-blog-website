import axios from "axios";

export async function registerUser(username, email, password) {
    const res = await axios.post("/api/auth/register", {
        username, email, password
      });
    return res.data;
}
