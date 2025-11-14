import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class LeaveRequest extends Document {
  @Prop({ type: Types.ObjectId, required: true })
  employeeId: Types.ObjectId;

  @Prop({ required: true })
  leaveType: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ default: 'Pending' })
  status: string;

  @Prop({ type: [String], default: [] })
  documents: string[];
}

export const LeaveRequestSchema = SchemaFactory.createForClass(LeaveRequest);
