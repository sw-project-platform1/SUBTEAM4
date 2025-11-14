import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LeaveTypeDocument = LeaveType & Document;

@Schema({ timestamps: true })
export class LeaveType extends Document {
    @Prop({ required: true, unique: true })
    code: string;


    @Prop({ required: true })
    name: string;


    @Prop({ required: true })
    category: string;
}


export const LeaveTypeSchema = SchemaFactory.createForClass(LeaveType);