export class Movie {
  constructor(
    public id: number,
    public original_title: string,
    public vote_average: number,
    public overview: string,
    public poster_path: string,
    public genres: string[]
  ) {}
}
