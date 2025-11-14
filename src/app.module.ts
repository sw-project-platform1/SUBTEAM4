import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LeavesModule } from './leaves/leaves.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://eyadebrahem:8WvTw02FdH5a5T0c@cluster0.1npiakz.mongodb.net/'),
    LeavesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
