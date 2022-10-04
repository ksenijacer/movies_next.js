import ApiService from "./ApiService";

const ENDPOINTS = {
  MOVIES: "/api/movies/",
};

class MovieService extends ApiService {
  getMovies = async () => {
    const { data } = await this.apiClient.get(`/api/movies/`);
    return data;
  };

  getMovie = async (id) => {
    const { data } = await this.apiClient.get(`api/movies/${id}`);
    return data;
  };

  createMovie = async (payload) => {
    const { data } = await this.apiClient.post(`/api/movies/`, payload);
    return data;
  };
}

const movieService = new MovieService();
export default movieService;
