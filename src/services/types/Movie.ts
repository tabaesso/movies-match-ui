export type Movie = {
  id: number;
  title: string | null;
  original_title: string | null;
  name: string | null;
  original_name: string | null;
  poster_path: string | null;
}

export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}