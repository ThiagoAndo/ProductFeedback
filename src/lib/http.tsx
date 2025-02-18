export const fetchComments = async () => {
  const response = await fetch("http://localhost:8080/request", {
    cache: "no-store",
  }); // `no-store` forces fresh data on each request
  if (!response.ok)
    throw new Error(`Error ${response.status}: Unable to fetch comments.`);
  return response.json();
};

