
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://blnncmgalhqgaetzdtms.supabase.co'
const supabaseKey =" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsbm5jbWdhbGhxZ2FldHpkdG1zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjQwNDIxOSwiZXhwIjoyMDI3OTgwMjE5fQ.OwcosZCrJxCYQaqE6L9eGdXsN4oZGK4xQYUE3-ragBA"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;