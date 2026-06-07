import { createClient } from "@supabase/supabase-js";

// Вытаскиваем наши секретные ключи из файла .env.local, который мы настроили вчера
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Инициализируем клиент Supabase для работы с нашей базой данных Afseng
export const supabase = createClient(supabaseUrl, supabaseKey);

