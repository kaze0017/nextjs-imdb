import React from "react";
import { getMovies, searchMovie } from "@/app/lib/actions";
import Card from "@/app/ui/collection/Card";

export async function Table({
  genre,
  query,
}: {
  genre: "trending" | "top_rated" | undefined;
  query?: string | undefined;
}) {
  let list: Array<any> = [];

  if (query) {
    list = await searchMovie({ query });
  } else if (genre) {
    list = await getMovies({ genre });
  } else {
    list = await getMovies({ genre: "trending" });
  }

  return (
    <div>
      {list.length > 0 ? (
        <div className="grid grid-cols-1 gap-2 sm:gap-4 lg:gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 max-w-6xl mx-auto py-4">
          {list?.map((movie?: any) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      ) : (
        <div className="max-w-6xl mx-auto content-center">
          <h1 className="text-4xl font-bold text-center">
            Please select a genre
          </h1>
        </div>
      )}
    </div>
  );
}
