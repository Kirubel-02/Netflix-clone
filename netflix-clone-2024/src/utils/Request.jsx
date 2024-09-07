const API_KEY = import.meta.env.VITE_API_KEY;

// const API_KEY = "d58ec2af166ce3d58fc89a0a99af40ac";
const requests = {
  fetchTrending: `/trendng/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_geners=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_geners=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_geners=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_geners=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_geners=99`,
  fetchTVShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
