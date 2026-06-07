import React from "react";
import type { WorkoutPlanRequest } from "../../types/workoutPlans.types";

interface WorkoutPlanFormProps {
  workout: WorkoutPlanRequest;
  handleChange: (
    eventInput: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleSave: () => void;
  onStructureChange: (
    dayNumber: string,
    field: "dayName" | "focusMuscleGroups",
    value: string,
  ) => void;
}
export function WorkoutPlanForm({
  workout,
  handleChange,
  handleSave,
  onStructureChange,
}: WorkoutPlanFormProps) {
  const numDays = workout.num_days <= 7 ? workout.num_days : 0;
  const daysArray = Array.from({ length: numDays || 1 }, (_, index) =>
    String(index + 1),
  );
  return (
    <>
      <div>
        <input type="text" name="name" onChange={handleChange} />
        <input
          type="number"
          name="num_days"
          onChange={handleChange}
          min="1"
          max="7"
          placeholder="Количество дней (1-7)"
        />
        {daysArray.map((dayNum) => {
          return (
            <div key={dayNum}>
              <div>
                <p>Day: {dayNum}</p>
              </div>

              <div>
                <input
                  type="text"
                  onChange={(e) =>
                    onStructureChange(dayNum, "dayName", e.target.value)
                  }
                />
                <input
                  type="text"
                  onChange={(e) =>
                    onStructureChange(
                      dayNum,
                      "focusMuscleGroups",
                      e.target.value,
                    )
                  }
                />
              </div>
            </div>
          );
        })}

        <div>
          <button onClick={handleSave}>push</button>
        </div>
      </div>
    </>
  );
}
