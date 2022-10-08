export type RequestType<type> = {
  statusCode: number;
  data?: type;
  message?: string;
}