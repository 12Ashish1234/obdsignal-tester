
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Car extends Document {
MIL: string;

DistanceWithMIL: number;

IgnitionType: string;

FuelStatus: string;

EngineLoad: number;

CoolantTemperature: number;

FuelPressure: number;

EngineSpeed: number;


MAF: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);