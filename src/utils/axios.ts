import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;

export const authInstance = axios.create({
  baseURL: "https://rtpcrreport-dcmc.onrender.com/api/auth",
  headers: { authorization: "foobar" },
});
