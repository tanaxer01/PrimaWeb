const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

async function fetchPost(id: number) {
  const res = await fetch(`${STRAPI_URL}/api/posts?populate=photos`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
  });

  const data = await res.json();

  // 1. Req status code
  if (!res.ok) {
    const error = new Error(data.error);
    return Promise.reject(error);
  }

  return Promise.resolve(data);
}

export { fetchPost };
