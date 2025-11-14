import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class LeavePolicy extends Document {
  @Prop({ required: true })
  type: string;  // Annual, Sick, Mission, etc.

  @Prop({ required: true })
  entitlement: number;

  @Prop()
  carryOverMax: number;

  @Prop()
  accrualRate: number;

  @Prop({ type: [Date], default: [] })
  blockedDays: Date[];
}

export const LeavePolicySchema = SchemaFactory.createForClass(LeavePolicy);
