import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = import.meta.env.NEXT_PUBLIC_SUPABASE_PROJECT_KEY

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;