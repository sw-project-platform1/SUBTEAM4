import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LeavePolicy, LeavePolicySchema } from './schemas/leavePolicy.schema';
import { LeaveRequest, LeaveRequestSchema } from './schemas/leaveRequest.schema';
import { LeaveBalance, LeaveBalanceSchema } from './schemas/leaveBalance.schema';

import { LeavesService } from './leaves.service';
import { LeavesController } from './leaves.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LeavePolicy.name, schema: LeavePolicySchema },
      { name: LeaveRequest.name, schema: LeaveRequestSchema },
      { name: LeaveBalance.name, schema: LeaveBalanceSchema },
    ]),
  ],
  controllers: [LeavesController],
  providers: [LeavesService],
})
export class LeavesModule {}
