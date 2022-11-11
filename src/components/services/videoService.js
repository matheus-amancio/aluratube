import { createClient } from '@supabase/supabase-js';

const PROJECT_URL = 'https://mqdvinxtsapgfccdkqyo.supabase.co';
const PUBLIC_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xZHZpbnh0c2FwZ2ZjY2RrcXlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMDU3OTMsImV4cCI6MTk4Mzc4MTc5M30.Ln--Xht3QfZ4770cgrVDJH-wrpVvgryhPY5hT-mMnpU';
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from('video').select('*');
    },
  };
}
