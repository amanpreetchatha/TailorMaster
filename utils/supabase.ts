
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient, processLock } from '@supabase/supabase-js'

const EXPO_PUBLIC_SUPABASE_URL="https://pnudfhiovsnzlyfsjmha.supabase.co";
const EXPO_PUBLIC_SUPABASE_KEY="sb_publishable_ti-rn-Ht_Q2BwKzs7Vypng_2JuEHevY";

export const supabase = createClient(
  EXPO_PUBLIC_SUPABASE_URL,
  EXPO_PUBLIC_SUPABASE_KEY,
{
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
      lock: processLock,
    },
  })
        