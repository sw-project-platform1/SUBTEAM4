import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeavesModule } from './leaves/leaves.module';

@Module({
  imports: [LeavesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
