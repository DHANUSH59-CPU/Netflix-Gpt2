export const LOGO =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDJiOWQzY2Y3ZmEyYTVkYzUyYzcxOTk5M2U2NDg0ZCIsIm5iZiI6MTczOTM4MTAwNS40MDIsInN1YiI6IjY3YWNkOTBkM2VlNzA4MzI3YzM2ZGU2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u_l_wPDoKJ9WcEMstcE218Auw8av6s2VW0PSldVbbKI",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  API_OPTIONS
)
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
