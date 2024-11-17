import { ERROR_CODES } from '../../../common/constants/error-codes';

export interface IDocumentationExceptionResponse {
  description?: string;
  statusCode?: number;
  message?: string;
  errorCode?: ERROR_CODES;
  error?: string;
}
