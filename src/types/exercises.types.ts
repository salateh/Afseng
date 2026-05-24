import { ApiResponse, BaseState } from "./common.types";

// Основной объект из БД (из таблицы exercises)
export interface Exercise {
  id: string; // uuid
  name: string;
  target_muscle_group: string;
  mechanics: string;
  equipment: string;
  description: string | null;
  created_at: string; // timestamptz
}

// Типизация ответа сервера для списка упражнений
export interface ExercisesResponse extends ApiResponse<Exercise>{}

// Параметры фильтрации при GET запросе
export interface ExerciseFilters {
  target_muscle_group?: string[];
  mechanics?: string[];
  equipment?: string[];
  search?: string;
}

// Сортировка
export type ExerciseSortField = "name" | "target_muscle_group" | "created_at";

// Объект запроса на создание/редактирование (Payload)
export interface ExerciseRequest {
  name: string;
  target_muscle_group: string;
  mechanics: string;
  equipment: string;
  description?: string | null;
}

// Стейт для модуля упражнений
export interface ExercisesState extends BaseState<Exercise, Exercise, ExerciseFilters> {
  sortField: ExerciseSortField;
}