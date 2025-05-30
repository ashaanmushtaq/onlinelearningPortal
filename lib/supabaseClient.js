// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uczlmsitmroukrcenpus.supabase.co'; // replace with your URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjemxtc2l0bXJvdWtyY2VucHVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNzAzMjEsImV4cCI6MjA2Mzc0NjMyMX0.n_sdr6rp5o4C857t5cP9C6u5OsySqfxlxvRQ-pHW6bo'; // replace with your anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
