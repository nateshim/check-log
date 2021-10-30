import axios from "axios";

const apiURL = process.env.NODE_ENV === "development" ? "http://localhost:8000" : "produrl";

export const defaultRoute = async () => {
  try {
    const res = await axios.get(apiURL);
    return res.data;
  } catch (e) {
    console.error(e.message);
  }
}