import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `https://asianpublisher.marwariplus.com`,
  withCredentials: true,
});
//   baseURL : `https://asianpublisher.marwariplus.com/api/BookApi`

export const REACT_APP_URL = "https://asianpublisher.marwariplus.com";
