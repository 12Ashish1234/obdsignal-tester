
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Car extends Document {
@Prop({ required: true })
MIL: string;

@Prop({ required: true })
DistanceWithMIL: number;

@Prop({ required: true })
IgnitionType: string;

@Prop({ required: true })
FuelStatus: string;

@Prop({ required: true })
EngineLoad: number;

@Prop({ required: true })
CoolantTemperature: number;

@Prop({ required: true })
FuelPressure: number;

@Prop({ required: true })
EngineSpeed: number;

@Prop({ required: true })
MAF: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);