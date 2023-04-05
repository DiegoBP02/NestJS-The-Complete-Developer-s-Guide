import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';

export const setupApp = (app: any) => {
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
};
