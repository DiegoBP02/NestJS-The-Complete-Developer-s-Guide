import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // use both in setup-app, the 'correct' way according to documentation is set in app module
  await app.listen(3000);
}
bootstrap();
