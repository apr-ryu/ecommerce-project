export const getData = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(`http://localhost:4000/${endpoint}`, {
    next: { revalidate: 0 },
  });
  return response.json();
};
