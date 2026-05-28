import type { ApiResponse, BaseState } from "./common.types";

export interface ExerciseLog {
  id: string;
  session_id: string;
  exercise_id: string;
  set_number: number;
  reps: number;
  weight_kg: number; // numeric
  rpe: number;       // numeric
  rir: number;
  cns_fatigue_weight: number; // numeric
  created_at: string;
}

export interface ExerciseLogsResponse extends ApiResponse<ExerciseLog> {}

export interface ExerciseLogFilters {
  session_id?: string;
  exercise_id?: string;
}

// Тело запроса на сохранение подхода
export interface ExerciseLogRequest {
  session_id: string;
  exercise_id: string;
  set_number: number;
  reps: number;
  weight_kg: number;
  rpe: number;
  rir: number;
  cns_fatigue_weight: number;
}

export interface ExerciseLogsState extends BaseState<ExerciseLog, ExerciseLog, ExerciseLogFilters> {}