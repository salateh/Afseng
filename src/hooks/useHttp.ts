import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export function useHttp<T>(from: string) {
  const [data, setData] = useState<T | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  console.log("Делаю запрос на:", from);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      if (!from) return;

      setError("");
      setLoading(true);

      try {
        const { data:resData, error:resError } = await supabase
          .from(from)
          .select("*")
          .abortSignal(controller.signal);

        if (resError) {
          throw new Error(resError.message);
        }

        await new Promise((resolve) => setTimeout(resolve, 500));

        setData(resData as T);
      } catch (e: any) {
        if (e.name === "CanceledError" || e.name === "AbortError") return;
        const error = e as Error;
        setError(error.message || "something went wrong");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [from]);

  return { data, error, loading, setLoading };
}
