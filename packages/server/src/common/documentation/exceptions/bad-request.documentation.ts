import { HttpStatus } from '@nestjs/common';

import { ERROR_MESSAGES, ERROR_CODES } from '../../constants';
import { SwaggerSchemaResponseBuilder } from '../../utils/documentation';
import { IDocumentationExceptionResponse } from '../interfaces';

export const BadRequestResponseDocumentation = ({
  description,
  statusCode,
  message,
  errorCode,
  error,
}: IDocumentationExceptionResponse = {}) =>
  new SwaggerSchemaResponseBuilder(HttpStatus.BAD_REQUEST)
    .addDescription(description ?? 'Example of schemas for bad request')
    .addProperty('statusCode', statusCode ?? HttpStatus.BAD_REQUEST)
    .addProperty('message', message ?? ERROR_MESSAGES.BAD_REQUEST)
    .addProperty('errorCode', errorCode ?? ERROR_CODES.BAD_REQUEST)
    .addProperty('error', error ?? ERROR_MESSAGES.BAD_REQUEST)
    .build();
