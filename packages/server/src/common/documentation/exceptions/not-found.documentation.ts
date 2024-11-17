import { HttpStatus } from '@nestjs/common';

import { ERROR_MESSAGES, ERROR_CODES } from '../../constants';
import { SwaggerSchemaResponseBuilder } from '../../utils/documentation';
import { IDocumentationExceptionResponse } from '../interfaces';

export const NotFoundResponseDocumentation = ({
  description,
  statusCode,
  message,
  errorCode,
  error,
}: IDocumentationExceptionResponse = {}) =>
  new SwaggerSchemaResponseBuilder(HttpStatus.NOT_FOUND)
    .addDescription(description ?? 'Example of schemas for not found resource')
    .addProperty('statusCode', statusCode ?? HttpStatus.NOT_FOUND)
    .addProperty('message', message ?? ERROR_MESSAGES.NOT_FOUND)
    .addProperty('errorCode', errorCode ?? ERROR_CODES.NOT_FOUND)
    .addProperty('error', error ?? ERROR_MESSAGES.NOT_FOUND)
    .build();
