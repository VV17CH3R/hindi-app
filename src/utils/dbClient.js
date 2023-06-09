import { createClient } from "@supabase/supabase-js";

export const db = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_DB_API_KEY
);
