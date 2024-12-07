export interface IBEResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
