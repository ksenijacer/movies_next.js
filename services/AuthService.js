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
      this.setAuthHeader();
      this.api.setUnauthorizedCallback(this.destroySession.bind(this));
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
      localStorage.setItem("accessToken", data.access);
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
    const { data } = await this.apiClient.post(ENDPOINTS.LOGIN, loginData);
    this.createSession(data);
    this.setAuthHeader(data.accessToken);
    return data;
  };

  logout = async () => {
    this.apiClient.post(ENDPOINTS.LOGOUT);
    this.destroySession();
    this.api.setUnauthorizedCallback(() => {});
  };

  register = async (registerData) => {
    console.log(registerData);
    const { data } = await this.apiClient.post(
      ENDPOINTS.REGISTER,
      registerData
    );
    return data;
  };

  getUser = () => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      console.log(user);
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
