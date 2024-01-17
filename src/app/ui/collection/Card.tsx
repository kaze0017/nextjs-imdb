import Link from "next/link";
import React from "react";
import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/24/outline";

export default function Card({
  movie,
}: {
  movie: {
    id: number;
    title: string;
    name?: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    vote_average: number;
    vote_count?: number;
    release_date: string;
  };
}) {
  return (
    <div className="cursor-pointer sm:p-3  sm:hover:shadow-slate-400 sm:shadow-lg sm:border sm:border-slate-400  transition-shadow duration-200 flex flex-col rounded-lg shadow-lg overflow-hidden group">
      <Link href={`/movie/${movie.id}`}>
        <div className="flex-shrink-0">
          <Image
            src={
              movie.backdrop_path || movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path || movie.poster_path}`
                : "/noimage.svg" // replace with the actual path to your placeholder image
            }
            width={500}
            height={250}
            style={{
              maxWidth: "100%",
              height: "auto",
              maxHeight: "250px",
              objectPosition: "center",
            }}
            alt={movie.title}
            className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
            placeholder="blur"
            loading="lazy"
            blurDataURL="/rolling.svg"
          />
        </div>
        <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-amber-600 line-clamp-1">
              {movie.title || movie.name || "No title available"}
            </p>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 line-clamp-2">
              {movie.overview || (
                <div>
                  <p>Overview</p>
                  Not Available
                </div>
              )}
            </p>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <span className="sr-only">{movie.title}</span>
              <img
                className="h-10 w-10 rounded-full"
                src={
                  movie.backdrop_path || movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : "/noimage.svg" // replace with the actual path to your placeholder image
                }
                alt={movie.title}
              />
            </div>
            <div className="ml-3">
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime="2020-03-16">
                  {movie.release_date?.split("-")[0] || "NA"}
                </time>
                <span aria-hidden="true">&middot;</span>
                <span>{`${movie.vote_average.toFixed(1)}/10` || "NA"}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
