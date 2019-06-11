import axios from "axios";

const request = axios.create({
  baseURL: process.env.BASE_API
})

export default request