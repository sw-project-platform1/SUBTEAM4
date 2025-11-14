import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LeavePolicyDocument = LeavePolicy & Document;

@Schema()
export class LeavePolicy {
  @Prop({ required: true })
  type: string;  // Annual, Sick, Mission, etc.

  @Prop({ required: true })
  entitlement: number;

  @Prop({ default: 0 })
  carryOverMax: number;

  @Prop({ default: 0 })
  accrualRate: number;

  @Prop({ default: 'none' })
  roundingMethod: string;  // 'none', 'up', 'down', etc.

  @Prop({ type: [Date], default: [] })
  blockedDays: Date[];
}

export const LeavePolicySchema = SchemaFactory.createForClass(LeavePolicy);
