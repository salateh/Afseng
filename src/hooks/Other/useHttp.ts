import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import type { ApiResponse } from "../../types/common.types";

export type useHttpPropsTable =
  | "exercises"
  | "exercise_logs"
  | "workout_sessions"
  | "workout_plans";

export function useHttp<T>(
  from: useHttpPropsTable,
  page: number = 1,
  pageSize: number = 9,
) {
  //
  const [data, setData] = useState<ApiResponse<T> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isInsert, setIsInsert] = useState<boolean>(false);

  const offset = (page - 1) * pageSize;
  const limit = offset + pageSize - 1;

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      if (!from) return;

      setError("");
      setLoading(true);

      try {
        const {
          data: resData,
          count,
          error: resError = false,
        } = await supabase
          .from(from)
          .select("*", { count: "exact" })
          .range(offset, limit)
          .abortSignal(controller.signal);

        if (resError) {
          throw new Error(resError.message);
        }

        await new Promise((resolve) => setTimeout(resolve, 500));

        setData({
          count: count ?? 0,
          results: (resData || []) as T[],
        });
      } catch (e: unknown) {
        const error = e as Error;
        if (controller.signal.aborted) {
          setError("");
          console.log("controller.signal.aborted");

          return;
        }
        if (error) setError(error.message || "something went wrong");
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
  }, [from, page, pageSize, isInsert]);
  async function insertData(sendingData: Partial<T>) {
    if (!sendingData) return;
    const { error: resError } = await supabase
      .from(from)
      .insert([sendingData] as any);

    if (resError) throw new Error(resError.message);
    else if (!resError) {
      setIsInsert((prev) => !prev);
    }
  }
  return { data, insertData, error, loading, setLoading };
}
