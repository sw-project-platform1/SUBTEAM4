import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LeavePolicy, LeavePolicySchema } from './schemas/leavePolicy.schema';
import { LeaveRequest, LeaveRequestSchema } from './schemas/leaveRequest.schema';
import { LeaveBalance, LeaveBalanceSchema } from './schemas/leaveBalance.schema';

import { LeavesService } from './leaves.service';
import { LeavesController } from './leaves.controller';

import { LeaveType, LeaveTypeSchema } from './schemas/leave-type.schema';
import { Entitlement, EntitlementSchema } from './schemas/entitlement.schema';
import { Calendar, CalendarSchema } from './schemas/calendar.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LeavePolicy.name, schema: LeavePolicySchema },
      { name: LeaveRequest.name, schema: LeaveRequestSchema },
      { name: LeaveBalance.name, schema: LeaveBalanceSchema },
      { name: LeaveType.name, schema: LeaveTypeSchema },
      { name: Entitlement.name, schema: EntitlementSchema },
      { name: Calendar.name, schema: CalendarSchema },
    ]),
  ],
  controllers: [LeavesController],
  providers: [LeavesService],
})
export class LeavesModule {}
