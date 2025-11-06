import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://xkvupxbwmanfutckkfmx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrdnVweGJ3bWFuZnV0Y2trZm14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzODMwMjYsImV4cCI6MjA3Nzk1OTAyNn0.S9loPIzg9ILeaw6V4ScUEB9sHk2FlmyAttQ9boltR_k';
export const supabase = createClient(supabaseUrl, supabaseKey)