import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToInstance, ClassConstructor } from 'class-transformer';

export function Serialize<T>(dto: ClassConstructor<T>) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor<T> implements NestInterceptor {
  constructor(private dto: ClassConstructor<T>) {}

  intercept(context: ExecutionContext, handler: CallHandler): Observable<T> {
    // run something before a request is handled by the request handler

    return handler.handle().pipe(
      map((data: T) => {
        // run something before the response is sent out
        return plainToInstance(this.dto, data, {
          excludeExtraneousValues: true, // only exposes the properties in dto
        });
      }),
    );
  }
}
