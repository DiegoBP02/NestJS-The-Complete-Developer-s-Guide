import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'process.env.secret',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // ignores extra properties from body
    }),
  );
  await app.listen(3000);
}
bootstrap();
