import {
  HttpStatus,
  NotFoundException as _NotFoundException,
} from '@nestjs/common';

import { ERROR_MESSAGES, ERROR_CODES } from '../common/constants';
import { IException } from './interfaces';

export class NotFoundException extends _NotFoundException {
  constructor(
    message = ERROR_MESSAGES.NOT_FOUND,
    errorCode = ERROR_CODES.NOT_FOUND,
    additionalFields?: Record<any, any>,
  ) {
    const error: IException = {
      statusCode: HttpStatus.NOT_FOUND,
      message,
      errorCode,
      error: ERROR_MESSAGES.NOT_FOUND,
      ...additionalFields,
    };
    super(error);
  }
}
