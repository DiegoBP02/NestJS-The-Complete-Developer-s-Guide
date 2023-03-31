import { Module } from '@nestjs/common';
import { MessagesRepository } from 'src/messages.repository';
import { MessagesService } from 'src/messages.service';
import { MessagesController } from './messages.controller';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository], // things that can be used as dependencies for other classes
})
export class MessagesModule {}
