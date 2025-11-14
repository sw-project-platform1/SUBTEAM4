import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CalendarDocument = Calendar & Document;

@Schema()
export class Calendar {
  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  description: string;

  @Prop({ default: false })
  isBlocked: boolean;
}

export const CalendarSchema = SchemaFactory.createForClass(Calendar);
