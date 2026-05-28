export interface ApiResponse<T> {
  count: number | null;
  results: T[];
}

export interface ApiError {
  status: number;
  statusText: string;
  message: string;
  error?: string;
}

export type SortOrder = "asc" | "desc";

export interface PaginationParams {
  page?: number;
  pageSize?: number;
  totalItems?: number;
}

// Абстрактный стейт приложения (подходит для Context / Redux / Zustand)
export interface BaseState<ListItem, DetailsItem, Filters> {
  items: ListItem[];
  isLoading: boolean;
  error: string | null;
  selectedItem: DetailsItem | null;
  searchResults: ListItem[] | null;
  count: number;
  page: number;
  next: string | null;
  previous: string | null;
  filters: Filters;
  sortField: string;
  sortOrder: SortOrder;
}

