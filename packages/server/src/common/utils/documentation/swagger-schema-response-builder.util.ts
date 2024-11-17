import { applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiResponse } from '@nestjs/swagger';
import { SchemaObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

import { ErrorSchema } from '../../documentation/exceptions/error-schema.documentation';
import { IDocumentationExceptionResponse } from '../../documentation/interfaces';

type PartialRecord<T extends keyof any, K> = {
  [key in T]?: K;
};

export class SwaggerSchemaResponseBuilder {
  private properties: PartialRecord<
    keyof IDocumentationExceptionResponse,
    SchemaObject
  > = {};
  private description: string;
  private statusCode: number;

  constructor(statusCode: number) {
    this.statusCode = statusCode;
  }

  addDescription(description: string): SwaggerSchemaResponseBuilder {
    this.description = description;

    return this;
  }

  addProperty(
    propertyName: keyof IDocumentationExceptionResponse,
    propertyExample: number | string | boolean,
  ): SwaggerSchemaResponseBuilder {
    this.properties[propertyName] = {
      type: typeof propertyExample,
      example: propertyExample,
    };

    return this;
  }

  build() {
    return applyDecorators(
      ApiExtraModels(ErrorSchema),
      ApiResponse({
        description: this.description,
        status: this.statusCode,
        schema: {
          type: 'object',
          properties: this.properties,
        },
      }),
    );
  }
}
