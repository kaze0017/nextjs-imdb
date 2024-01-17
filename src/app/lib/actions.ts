"use server";

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;
export async function getMovies({
  genre,
}: {
  genre: "trending" | "top_rated" | undefined;
}) {
  let api_url;
  genre === "trending"
    ? (api_url =
        API_URL + "/trending/all/week?api_key=" + API_KEY + "&language=en-US")
    : (api_url =
        API_URL + "/movie/top_rated?api_key=" + API_KEY + "&language=en-US");
  try {
    const response = await fetch(api_url, {
      next: { revalidate: 10000 },
    });
    const data = await response.json();
    const list = data.results;
    return list;
  } catch (error) {
    throw new Error("Failed to Delete Invoice");
  }
}

export async function getMovie({ id }: { id: string }) {
  const api_url = API_URL + "/movie/" + id + "?api_key=" + API_KEY;
  try {
    const response = await fetch(api_url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to Delete Invoice");
  }
}
