import React from "react";
import { WorkoutPlans } from "../../components/Workouts/WorkoutPlans";
import { useWorkout } from "../../hooks/useWorkout";
import { WorkoutPlanForm } from "../../components/Workouts/WorkoutPlanForm";
//
// const workoutPlan_object: WorkoutPlanRequest = {
//   name: "name...",
//   num_days: 1,
//   description: "decription...",
//   split_structure: {
//     "1": {
//       dayName: "dayName...",
//       focusMuscleGroups: ["focusMuscleGroups1...", "focusMuscleGroups2..."],
//     },
//   },
// };
export function WorkoutPage() {
  // const { data, loading } = useHttp<WorkoutPlan>("workout_plans");
  const {
    data,
    workout,
    loading,
    handleChange,
    handleSave,
    onStructureChange,
  } = useWorkout();

  if (loading)
    return (
      <div>
        <p>loading....</p>
      </div>
    );
  if (data?.results.length === 0)
    return (
      <div>
        <p>no training</p>
        <WorkoutPlanForm
          handleChange={handleChange}
          handleSave={handleSave}
          onStructureChange={onStructureChange}
          workout={workout}
        />
      </div>
    );

  return (
    <>
      <div>
        <WorkoutPlanForm
          handleChange={handleChange}
          handleSave={handleSave}
          onStructureChange={onStructureChange}
          workout={workout}
        />
        {data?.results.map((a) => (
          <WorkoutPlans key={a.id} workout={a} />
        ))}
      </div>
    </>
  );
}
