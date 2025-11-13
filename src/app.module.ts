import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LeavesModule } from './leaves/leaves.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || ''),
    LeavesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
