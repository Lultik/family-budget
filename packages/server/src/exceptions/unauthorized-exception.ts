import {
  HttpStatus,
  UnauthorizedException as _UnauthorizedException,
} from '@nestjs/common';

import { ERROR_MESSAGES } from '../common/constants';
import { ERROR_CODES } from '../common/constants/error-codes';
import { IException } from './interfaces';

export class UnauthorizedException extends _UnauthorizedException {
  constructor(
    message = ERROR_MESSAGES.UNAUTHORIZED,
    errorCode = ERROR_CODES.UNAUTHORIZED,
    additionalFields?: Record<any, any>,
  ) {
    const error: IException = {
      statusCode: HttpStatus.UNAUTHORIZED,
      message,
      errorCode,
      error: ERROR_MESSAGES.UNAUTHORIZED,
      ...additionalFields,
    };
    super(error);
  }
}
