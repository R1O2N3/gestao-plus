import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
import { supabase } from "../../lib/supabase";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Configuração do Supabase não encontrada."
  );
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
