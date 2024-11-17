import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BudgetRecordDocument = HydratedDocument<BudgetRecord>;

@Schema({ collection: 'budget', timestamps: true })
export class BudgetRecord {
  @Prop({ required: true })
  value: number;

  @Prop({ required: true })
  category: string;

  @Prop()
  description?: string;

  @Prop()
  timestamp?: string;

  @Prop()
  createdBy?: string;

  @Prop()
  discount?: number;

  @Prop({ default: null })
  deletedAt: Date;
}

export const BudgetRecordSchema = SchemaFactory.createForClass(BudgetRecord);
