import React from "react";
import type { WorkoutPlan } from "../../types/workoutPlans.types";

interface WorkoutPlanProps {
  workout: WorkoutPlan;
}
export function WorkoutPlans({ workout }: WorkoutPlanProps) {
  return (
    <>
      <div>
        {workout && (
          <div>
            <div>
              <p>{workout.name}</p>
              <p>{workout.description}</p>
              {Object.entries(workout.split_structure).map(
                ([dayNum, dayData]) => {
                  return (
                    <div key={dayNum}>
                      <p>{dayData.dayName}</p>
                      {dayData.focusMuscleGroups.map((a, index) => {
                        return (
                          <div
                            key={`${dayNum}-${a}-${dayData.dayName}-${index}`}
                          >
                            <p>{a}</p>
                          </div>
                        );
                      })}
                    </div>
                  );
                },
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
