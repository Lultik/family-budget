import {
  BadRequestException as _BadRequestException,
  HttpStatus,
} from '@nestjs/common';

import { ERROR_MESSAGES } from '../common/constants';
import { ERROR_CODES } from '../common/constants/error-codes';
import { IException } from './interfaces';

export class BadRequestException extends _BadRequestException {
  constructor(
    message: string | string[] = ERROR_MESSAGES.BAD_REQUEST,
    errorCode = ERROR_CODES.BAD_REQUEST,
    additionalFields?: Record<any, any>,
  ) {
    const error: IException = {
      statusCode: HttpStatus.BAD_REQUEST,
      message,
      errorCode,
      error: ERROR_MESSAGES.BAD_REQUEST,
      ...additionalFields,
    };
    super(error);
  }
}
