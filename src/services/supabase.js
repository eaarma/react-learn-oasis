import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tcxzskpqziqvdqyzkuqw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjeHpza3BxemlxdmRxeXprdXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1MDA1OTksImV4cCI6MjAxOTA3NjU5OX0.siBiBMb35LJPtngRw0Vfjf2cj2Nm0EF7Xuaoyg6Q7Q4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
