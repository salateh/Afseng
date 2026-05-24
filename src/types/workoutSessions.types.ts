import { ApiResponse, BaseState } from "./common.types";

export interface WorkoutSession {
  id: string;
  plan_id: string | null;
  session_name: string;
  performed_at: string; // timestamptz
  cns_fatigue_index: number; // numeric
  session_notes: string | null;
  created_at: string;
}

export interface WorkoutSessionsResponse extends ApiResponse<WorkoutSession> {}

export interface WorkoutSessionFilters {
  plan_id?: string;
  dateFrom?: string; // ISO дата для фильтрации по периодам
  dateTo?: string;
  minFatigue?: number;
  maxFatigue?: number;
}

export type WorkoutSessionSortField = "performed_at" | "cns_fatigue_index" | "session_name";

export interface WorkoutSessionRequest {
  plan_id?: string | null;
  session_name: string;
  performed_at: string;
  cns_fatigue_index: number;
  session_notes?: string | null;
}

export interface WorkoutSessionsState extends BaseState<WorkoutSession, WorkoutSession, WorkoutSessionFilters> {
  sortField: WorkoutSessionSortField;
}