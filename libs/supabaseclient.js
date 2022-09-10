/*
  Project Name: ss-rts
  License: MIT
  Created by: Lightnet
*/

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

//console.log(supabaseUrl)
//console.log(supabaseAnonKey)

// Create a single supabase client for interacting with your database
const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)

export {
  supabase
};

export default supabase;