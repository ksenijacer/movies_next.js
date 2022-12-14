import axios from "axios";
import config from "../config";

class HttpService {
  constructor(options = {}) {
    this.client = axios.create(options);
    this.client.interceptors.response.use(
      this.handleSuccessResponse,
      this.handleErrorResponse
    );
    this.unauthorizedCallback = () => {};
  }

  attachHeaders(headers) {
    Object.assign(this.client.defaults.headers, headers);
  }

  removeHeaders(headerKeys) {
    headerKeys.forEach((key) => delete this.client.defaults.headers[key]);
  }

  handleSuccessResponse(response) {
    return response;
  }

  // handleErrorResponse(error) {
  //   const { status } = error.response;

  //   switch (status) {
  //     case 401: {
  //       this.unauthorizedCallback();
  //       break;
  //     }
  //     default:
  //       break;
  //   }

  //   return Promise.reject(error);
  // }

  setUnauthorizedCallback(callback) {
    this.unauthorizedCallback = callback;
  }
}

const options = {
  baseURL: "http://127.0.0.1:8000",
};

const httpService = new HttpService(options);
export default httpService;
