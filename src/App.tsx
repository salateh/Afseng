import { Route, Routes } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { WorkoutPage } from "./pages/Workout/WorkoutsPage";

export default function App() {
  return (
    <div className=" bg-gradient-to-r from-stone-700 via-stone-900/95 to-stone-700">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="workout" element={<WorkoutPage/>} />
        </Route>
      </Routes>
    </div>
  );
}
