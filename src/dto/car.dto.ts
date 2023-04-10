import { IsString, IsNumber } from 'class-validator';

export class CarDto {
  @IsString()
  MIL: string;

  @IsNumber()
  DistanceWithMIL: number;

  @IsString()
  IgnitionType: string;

  @IsString()
  FuelStatus: string;

  @IsNumber()
  EngineLoad: number;

  @IsNumber()
  CoolantTemperature: number;

  @IsNumber()
  FuelPressure: number;

  @IsNumber()
  EngineSpeed: number;

  @IsNumber()
  MAF: number;
}