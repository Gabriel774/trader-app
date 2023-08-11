import axios, { AxiosInstance } from "axios";
import { ApiURL } from "./constants";

export default class Service {
  protected http: AxiosInstance;
  protected token: string | null;

  constructor(token?: string) {
    this.http = axios.create({
      baseURL: ApiURL,
      timeout: 15000,
    });

    this.token = token ?? null;
  }
}
