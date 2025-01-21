import { createClient as supabaseCreateClient } from '@supabase/supabase-js';

export const createClient = async () => {
  // Fetch the access token from the API route
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/getAccessToken`);
  const { accessToken } = await response.json();

  // Ensure environment variables are set
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL and Anon Key must be set in environment variables');
  }

  // Create the Supabase client with the extracted access token
  return supabaseCreateClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      global: {
        headers: {
          ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
        },
      },
    }
  );
}; 