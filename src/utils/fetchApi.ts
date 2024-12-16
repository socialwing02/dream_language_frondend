export async function fetchApi(url: string, data: any) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("failed");
  }

  const result = await response.json();

  result.status = true;

  return result;
}
