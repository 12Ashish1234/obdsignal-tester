import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CarDto {
  @IsString()
  @IsNotEmpty() MIL: string;

  @IsNumber()
  @IsNotEmpty() DistanceWithMIL: number;

  @IsString()
  @IsNotEmpty() IgnitionType: string;

  @IsString()
  @IsNotEmpty() FuelStatus: string;

  @IsNumber()
  @IsNotEmpty() EngineLoad: number;

  @IsNumber()
  @IsNotEmpty() CoolantTemperature: number;

  @IsNumber()
  @IsNotEmpty() FuelPressure: number;

  @IsNumber()
  @IsNotEmpty() EngineSpeed: number;

  @IsNumber()
  @IsNotEmpty() MAF: number;
}