import { ApiResponse, BaseState } from "./common.types";

// Структура для jsonb поля split_structure
export interface SplitStructure {
  [dayNumber: string]: {
    dayName: string;            
    focusMuscleGroups: string[]; 
  };
}

export interface WorkoutPlan {
  id: string;
  name: string;
  description: string | null;
  num_days: number;
  split_structure: SplitStructure;
  created_at: string;
  updated_at: string;
}

export interface WorkoutPlansResponse extends ApiResponse<WorkoutPlan> {}

export interface WorkoutPlanFilters {
  minDays?: number;
  maxDays?: number;
  search?: string;
}

export type WorkoutPlanSortField = "name" | "num_days" | "updated_at";

export interface WorkoutPlanRequest {
  name: string;
  description?: string | null;
  num_days: number;
  split_structure: SplitStructure;
}

export interface WorkoutPlansState extends BaseState<WorkoutPlan, WorkoutPlan, WorkoutPlanFilters> {
  sortField: WorkoutPlanSortField;
}