const headers = {
  'Content-Type': 'application/json',
  apikey: import.meta.env.VITE_SUPABASE_KEY,
  Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_KEY}`,
};

const simpleApiClient = (url: string, method: string = 'GET', body?: Object) => {
  const data = body ? { body: JSON.stringify(body) } : {};

  return fetch(
    url,
    {
      method,
      headers,
      ...data,
    },
  );
};

export default simpleApiClient;
