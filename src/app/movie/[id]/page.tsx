import React from "react";
import { getMovie } from "@/app/lib/actions";
import Image from "next/image";

export default async function page({ params }: { params?: { id?: string } }) {
  let id: string;
  id = params?.id || "";
  const movie = await getMovie({ id });
  return (
    <div className="max-w-6xl mx-auto items-center content-center sm:p-2 6xl:p-0">
      <div className="grid grid-col-1 sm:grid-cols-2 gap-2">
        <Image
          src={
            movie.backdrop_path || movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path || movie.poster_path}`
              : "/noimage.svg" // replace with the actual path to your placeholder image
          }
          width={500}
          height={300}
          style={{
            maxWidth: "100%",
            height: "auto",
            objectPosition: "center",
          }}
          alt={movie.title}
          className="sm:rounded-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/rolling.svg"
          loading="lazy"
        />
        <div>
          <h1 className="text-2xl font-bold text-amber-600">
            {movie.title || movie.name || "No title available"}
          </h1>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-400 ">
            <span className="font-semibold mr-1">Ocewrview: </span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date || "Not available"}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {`${movie.vote_average.toFixed(1)}/10` || "Not available"}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Vote Count:</span>
            {movie.vote_count || "Not available"}
          </p>
        </div>
      </div>
    </div>
  );
}
