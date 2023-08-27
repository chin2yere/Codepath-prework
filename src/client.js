import { createClient } from "@supabase/supabase-js";
const URL = 'https://xrvnfosyapksbsiubmgu.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhydm5mb3N5YXBrc2JzaXVibWd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI0NjYyMTIsImV4cCI6MjAwODA0MjIxMn0.Bpy4GqQi7bERCOjVXXlV0qC-QsHlGDpt8vrBLw6W22M';
export const supabase = createClient(URL, API_KEY);