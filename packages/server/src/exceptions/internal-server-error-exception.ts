import {
  HttpStatus,
  InternalServerErrorException as _InternalServerErrorException,
} from '@nestjs/common';

import { ERROR_MESSAGES } from '../common/constants';
import { ERROR_CODES } from '../common/constants/error-codes';
import { IException } from './interfaces';

export class InternalServerErrorException extends _InternalServerErrorException {
  constructor(
    message = ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
    errorCode = ERROR_CODES.INTERNAL_SERVER_ERROR,
    additionalFields?: Record<any, any>,
  ) {
    const error: IException = {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message,
      errorCode,
      error: ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
      ...additionalFields,
    };
    super(error);
  }
}
