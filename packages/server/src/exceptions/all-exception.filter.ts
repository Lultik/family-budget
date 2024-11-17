import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

import { InternalServerErrorException } from './index';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    let httpException: HttpException;

    if (exception instanceof HttpException) {
      httpException = exception;
    } else {
      httpException = new InternalServerErrorException('Internal error');
      const { log } = ctx.getRequest();
      log.error(
        `Unhandled error: ${JSON.stringify(
          exception,
          Object.getOwnPropertyNames(exception),
        )}`,
      );
    }

    httpAdapter.reply(
      ctx.getResponse(),
      httpException.getResponse(),
      httpException.getStatus(),
    );
  }
}
