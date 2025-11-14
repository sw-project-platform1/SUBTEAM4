import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type LeaveRequestDocument = LeaveRequest & Document;

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

  @Prop({required: true})
  justification: string;

  @Prop({required: true, default: 'Pending' })
  status: string;

  @Prop({ type: [String], default: [] })
  documents: string[];
}

export const LeaveRequestSchema = SchemaFactory.createForClass(LeaveRequest);
