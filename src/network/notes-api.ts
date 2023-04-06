async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.error;
    throw Error(errorMessage);
  }
}

export async function fetchUsers(): Promise<[]> {
  const response = await fetchData(
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users",
    {
      method: "GET",
    }
  );
  return response.json();
}
