import ApiService from "./ApiService";

const ENDPOINTS = {
  LOGIN: "/api/login",
  REGISTER: "/api/register",
  LOGOUT: "/api/logout",
  ACTIVE_USER: "/api/profile",
};

class AuthService extends ApiService {
  constructor() {
    super();
    this.init();
  }

  init = () => {
    const token = this.getToken();

    if (token) {
      this.setAuthHeader(token);
      this.api.setUnauthorizedCallback(this.destroySession);
    }
  };

  setAuthHeader = (token) => {
    this.api.attachHeaders({
      Authorization: `Bearer ${token}`,
    });
  };

  getToken = () => {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("accessToken");
    }
    return null;
  };

  createSession = (token) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("accessToken", token);
    }
  };

  destroySession = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
      this.api.removeHeaders(["Authorization"]);
    }
  };

  login = async (loginData) => {
    this.destroySession();
    const response = await this.apiClient.post(ENDPOINTS.LOGIN, loginData);
    const data = response.data;
    this.createSession(data.access_token);
    this.setAuthHeader(data.access_token);

    return data;
  };

  logout = async () => {
    this.apiClient.post(ENDPOINTS.LOGOUT);
    this.destroySession();
  };

  register = async (registerData) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.REGISTER,
      registerData
    );
    return data;
  };

  getUser = () => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      return JSON.parse(user);
    }
  };

  getActiveUser = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.ACTIVE_USER);
    return data;
  };

  isAuthenticated = () => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user"));
      return user && user.accessToken ? true : false;
    }
  };
}

const authService = new AuthService();
export default authService;
