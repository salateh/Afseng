import { useState } from "react";
import type {
  WorkoutPlan,
  WorkoutPlanRequest,
} from "../types/workoutPlans.types";
import { useHttp } from "./useHttp";
import type React from "react";

export const useWorkout = () => {
  const { data, loading, insertData } = useHttp<WorkoutPlan>("workout_plans");

  const [workout, setWorkout] = useState<WorkoutPlanRequest>(() => {
    const savedWorkout = localStorage.getItem("workoutPlan");
    return savedWorkout
      ? JSON.parse(savedWorkout)
      : { name: "", num_days: 1, description: "", split_structure: {} };
  });

  const handleSave = () => {
    localStorage.setItem("workoutPlan", JSON.stringify(workout));
    insertData(workout);
  };

  const handleChange = (
    eventInput: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = eventInput.target;

    setWorkout((prev) => ({
      ...prev,
      [name]: name === "num_days" ? Number(value) : value,
    }));
  };

  const onStructureChange = (
    dayNumber: string,
    field: "dayName" | "focusMuscleGroups",
    value: string,
  ) => {
    setWorkout((prev) => {
      const currentDayData = prev.split_structure?.[dayNumber] || {
        dayName: "",
        focusMuscleGroups: [],
      };
      let updatedValue: string | string[] = value;
      if (field === "focusMuscleGroups")
        updatedValue = value.split(",").map((a) => a.trim());

      return {
        ...prev,
        split_structure: {
          ...prev.split_structure,
          [dayNumber]: {
            ...currentDayData,
            [field]: updatedValue,
          },
        },
      };
    });
  };

  return {
    workout,
    data,
    handleSave,
    handleChange,
    onStructureChange,
    loading,
  };
};
