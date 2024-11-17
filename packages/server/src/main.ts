import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './exceptions';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';

const PORT = process.env.PORT || 3001;

async function bootstrap() {
  console.log(`Starting server at port ${PORT}`);
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  const httpAdapterHost = app.get(HttpAdapterHost);

  app.enableCors({
    origin: process.env.FRONTEND_URL,
  });

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapterHost));

  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());

  await app.listen(PORT, () => {
    const logger = app.get(Logger);
    logger.log(`Server started on port ${PORT}`);
    logger.fatal(process.env.FRONTEND_URL);
  });
}

bootstrap();
