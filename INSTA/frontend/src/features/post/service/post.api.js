
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/post",
  withCredentials: true,
});

export async function getFeed() {
  const response = await api.get("/getfeed");
  return response.data;
}
