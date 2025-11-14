import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EntitlementDocument = Entitlement & Document;

@Schema()
export class Entitlement {
  @Prop({ required: true })
  employeeType: string;

  @Prop({ required: true })
  leaveTypeCode: string;

  @Prop({ required: true })
  entitlementDays: number;
}

export const EntitlementSchema = SchemaFactory.createForClass(Entitlement);
