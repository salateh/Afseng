import { Route, Routes } from "react-router";
import { MainLayout } from "./layouts/Main/MainLayout";
import { WorkoutPage } from "./pages/Workout/WorkoutsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="create-workout" element={<WorkoutPage />} />
      </Route>
    </Routes>
  );
}
