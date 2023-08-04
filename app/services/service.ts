import axios, { AxiosInstance } from "axios";
import { ApiURL } from "./constants";

export default class Service {
  protected http: AxiosInstance;

  constructor(token?: string) {
    this.http = axios.create({
      baseURL: ApiURL,
      timeout: 15000,
    });
  }
}
