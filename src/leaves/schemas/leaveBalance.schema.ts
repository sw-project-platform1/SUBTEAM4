import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class LeaveBalance extends Document {
  @Prop({ type: Types.ObjectId, required: true })
  employeeId: Types.ObjectId;

  @Prop({ default: 0 })
  accrued: number;

  @Prop({ default: 0 })
  taken: number;

  @Prop({ default: 0 })
  remaining: number;
}

export const LeaveBalanceSchema = SchemaFactory.createForClass(LeaveBalance);
