import { getMovies } from "@/app/lib/actions";
import { Table } from "@/app/ui/collection/Table";
export default async function Home() {
  const data = await getMovies({ genre: "trending" });
  const movies = data.results;

  return (
    <main>
      <Table collection={movies} />
    </main>
  );
}
