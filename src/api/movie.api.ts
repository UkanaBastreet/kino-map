import axios, { AxiosInstance } from "axios";

export async function getMovies() {
  let res = await axios
    .get("http://www.omdbapi.com/?apikey=430fbce6&s=yes&type=series&page=2")
    .then((r) => r.data);
  return res;
}

class MovieApi {
  instance: AxiosInstance;
  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });
  }
  async getItems(
    page?: number,
    title?: string,
    type?: typeParamType,
    year?: number
  ) {
    const titleParam = title ? "&s=" + title : "";
    const pageParam = page ? "&page=" + page : "";
    const typeParam = type ? "&type=" + type : "";
    const yearParam = year ? "&year" + year : "";
    const res = await this.instance
      .get(pageParam + typeParam + yearParam + titleParam)
      .then((res) => res.data);

    return res;
  }
}

export const movieApi = new MovieApi(
  "http://www.omdbapi.com/?apikey=430fbce6&"
);

type typeParamType = "movie" | "series" | "episode";
