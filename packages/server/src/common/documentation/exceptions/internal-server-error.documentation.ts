import { HttpStatus } from '@nestjs/common';

import { ERROR_MESSAGES } from '../../constants';
import { SwaggerSchemaResponseBuilder } from '../../utils/documentation';
import { IDocumentationExceptionResponse } from '../interfaces';

export const InternalServerErrorResponseDocumentation = ({
  description,
  statusCode,
  message,
  error,
}: IDocumentationExceptionResponse = {}) =>
  new SwaggerSchemaResponseBuilder(HttpStatus.INTERNAL_SERVER_ERROR)
    .addDescription(
      description ?? 'Example of schemas for internal server error',
    )
    .addProperty('statusCode', statusCode ?? HttpStatus.INTERNAL_SERVER_ERROR)
    .addProperty('message', message ?? ERROR_MESSAGES.INTERNAL_SERVER_ERROR)
    .addProperty('error', error ?? ERROR_MESSAGES.INTERNAL_SERVER_ERROR)
    .build();
