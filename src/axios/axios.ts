import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.example.com", // fallback base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
