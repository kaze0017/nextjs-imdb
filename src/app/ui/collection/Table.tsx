"use client";
import React from "react";
import { getMovies } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";

export async function Table() {
  const searchParams = useSearchParams();
  let genre: "trending" | "top_rated";
  genre = searchParams.get("type") as "trending" | "top_rated";
  const data = await getMovies({ genre });
  const movies = data.results;

  return (
    <div>
      {movies?.map((movie?: any) => {
        return (
          <div className="max-w-6xl mx-auto content-center" key={movie.id}>
            {movie.title}
          </div>
        );
      })}
    </div>
  );
}
