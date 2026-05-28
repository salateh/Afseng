import { useState } from "react";
import { useHttp } from "./hooks/useHttp";
import type { Exercise } from "./types/exercises.types";

export default function App() {
  const [page, setPage] = useState<number>(1);
  const { data, error } = useHttp<Exercise>("exercises", page, 2);
  console.log("page:", page);
  console.log("data:", data);

  return (
    <>
      <p>{data?.results.map((a) => a.name)}</p>
      {error && <p>{error}</p>}
      <button onClick={() => setPage((prev) => prev + 1)}>next page</button>
    </>
  );
}
