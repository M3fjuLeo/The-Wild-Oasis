import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ojlqnvbwfwzfnolkeurn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3aWRtdmdzZWhlYnJvaHhjbGhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5OTg0OTUsImV4cCI6MjAzOTU3NDQ5NX0.dw1tYITVF7ivaxe4B2FnbYeY6doVi_r-96tXjk8TRLE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
