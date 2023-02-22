import axios from "axios";

export const server = axios.create({
  baseURL: "https://backend-confirmando-designacoes.vercel.app",
});
