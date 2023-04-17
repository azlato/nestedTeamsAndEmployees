const headers = {
  'Content-Type': 'application/json',
  apikey: import.meta.env.VITE_SUPABASE_KEY,
  Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_KEY}`,
};

const fetcher = (url: string) => fetch(url, { headers }).then((res) => res.json());

export default fetcher;
