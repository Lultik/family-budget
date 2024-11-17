import { ApiProperty } from '@nestjs/swagger';

import { ERROR_CODES } from '../../constants';
import { IDocumentationExceptionResponse } from '../interfaces';

export class ErrorSchema implements IDocumentationExceptionResponse {
  @ApiProperty({
    type: 'string',
    required: false,
  })
  statusCode?: number;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  message?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  description?: string;

  @ApiProperty({
    type: 'string',
    required: false,
    enum: ERROR_CODES,
  })
  errorCode?: ERROR_CODES;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  error?: string;
}
