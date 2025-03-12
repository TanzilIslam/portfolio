import { env } from "./env";
import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(env.supabaseProjectUrl, env.supabaseAPIKey);