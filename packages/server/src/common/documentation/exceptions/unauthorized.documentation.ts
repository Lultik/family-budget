import { HttpStatus } from '@nestjs/common';

import { ERROR_MESSAGES } from '../../constants';
import { SwaggerSchemaResponseBuilder } from '../../utils/documentation';
import { IDocumentationExceptionResponse } from '../interfaces';

export const UnauthorizedResponseDocumentation = ({
  description,
  statusCode,
  message,
}: IDocumentationExceptionResponse = {}) =>
  new SwaggerSchemaResponseBuilder(HttpStatus.UNAUTHORIZED)
    .addDescription(description ?? 'Example of schemas for unauthorized users')
    .addProperty('statusCode', statusCode ?? HttpStatus.UNAUTHORIZED)
    .addProperty('message', message ?? ERROR_MESSAGES.UNAUTHORIZED)
    .build();
