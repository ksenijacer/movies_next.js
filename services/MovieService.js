import ApiService from "./ApiService";

const ENDPOINTS = {
  MOVIES: "/api/movies",
  GENRES: "/api/genres",
};

class MovieService extends ApiService {
  getMovies = async (page) => {
    console.log;
    if (page) {
      const { data } = await this.apiClient.get(
        `${ENDPOINTS.MOVIES}` + `?page=${page}`
      );
      return data;
    }
    const { data } = await this.apiClient.get(`${ENDPOINTS.MOVIES}`);
    return data;
  };

  getMovie = async (id) => {
    const { data } = await this.apiClient.get(`${ENDPOINTS.MOVIES}/${id}`);
    return data;
  };

  createMovie = async (payload) => {
    const { data } = await this.apiClient.post(`${ENDPOINTS.MOVIES}`, payload);
    return data;
  };

  getGenres = async () => {
    const { data } = await this.apiClient.get(`${ENDPOINTS.GENRES}`);
    return data;
  };
}

const movieService = new MovieService();
export default movieService;
