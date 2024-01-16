import React from "react";

export default function page() {
  return (
    <div className="max-w-6xl mx-auto content-center space-y-4">
      <h1 className="text-2xl font-medium text-amber-500">About</h1>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">Welcome to FilmMirror</h1>
        <p className="mb-6">
          Your ultimate destination for cinematic exploration! As the premier
          IMDb-clone platform, FilmMirror is committed to providing a familiar
          yet enhanced experience for film enthusiasts. Our platform caters to
          cinephiles, casual viewers, and everyone in between, offering a
          comprehensive database and an intuitive interface.
        </p>

        <p className="mb-6">
          FilmMirror goes beyond being a clone, paying homage to IMDb with
          additional user-centric features. Access accurate information on
          movies, TV shows, actors, directors, and more. Navigate our
          user-friendly interface effortlessly, engage with a thriving
          community, and create a personalized profile for tailored
          recommendations.
        </p>

        <h2 className="text-2xl font-bold mb-4">Key Features:</h2>
        <ul className="list-disc pl-8">
          <li className="mb-2">
            Accurate Information: A curated database for reliable details.
          </li>
          <li className="mb-2">
            User-Friendly Interface: Seamless browsing experience.
          </li>
          <li className="mb-2">
            Community Engagement: Join discussions and share recommendations.
          </li>
          <li className="mb-2">
            Personalized Profiles: Track your watchlist and receive
            recommendations.
          </li>
          <li className="mb-2">
            Behind-the-Scenes Insights: Explore exclusive articles and trivia.
          </li>
        </ul>

        <p className="mt-8">
          Experience FilmMirror today – your trusted companion in the world of
          entertainment where the IMDb experience meets a new level of
          excellence.
        </p>
      </div>
    </div>
  );
}
