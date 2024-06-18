import { ErrorRequestDTO } from './ErrorRequestDTO';

export interface DefaultResponse<T> {
  code: number;
  success: boolean;
  message: string;
  errors?: ErrorRequestDTO[];
  data: T | null;
}
