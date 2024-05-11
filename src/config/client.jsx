import { createClient } from '@supabase/supabase-js'

const projectUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL
const projectKey = import.meta.env.VITE_SUPABASE_PROJECT_KEY

const supabase = createClient(projectUrl, projectKey);

export default supabase;