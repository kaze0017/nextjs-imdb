const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

export async function getMovies({
  genre,
}: {
  genre: "trending" | "top_rated";
}) {
  //   throw new Error("Failed to Delete Invoice");

  let url;
  genre === "trending"
    ? (url =
        API_URL + "/trending/all/week?api_key=" + API_KEY + "&language=en-US")
    : (url =
        API_URL + "/movie/top_rated?api_key=" + API_KEY + "&language=en-US");
  try {
    const response = await fetch(url, {
      next: { revalidate: 10000 },
    });
    return response.json();
  } catch (error) {
    throw new Error("Failed to Delete Invoice");
  }
}
