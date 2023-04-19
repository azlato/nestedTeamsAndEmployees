const headers = {
  'Content-Type': 'application/json',
  apikey: import.meta.env.VITE_SUPABASE_KEY,
  Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_KEY}`,
};

const simpleApiClient = (url: string, body?: Object) => {
  const method = body ? 'POST' : 'GET';
  const data = body ? { body: JSON.stringify(body) } : {};
  const customHeaders = body ? { Prefer: 'return=minimal' } : { Prefer: '' };

  return fetch(
    url,
    {
      method,
      headers: {
        ...headers,
        ...customHeaders,
      },
      ...data,
    },
  ).then((res) => res.json());
};

export default simpleApiClient;
