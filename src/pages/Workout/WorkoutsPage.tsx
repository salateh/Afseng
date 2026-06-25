import React from "react";
import { WorkoutPlans } from "../../components/Workouts/WorkoutPlans";
import { useWorkout } from "../../hooks/Workout/useWorkout";
import { WorkoutPlanForm } from "../../components/Workouts/WorkoutPlanForm";
export function WorkoutPage() {
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
