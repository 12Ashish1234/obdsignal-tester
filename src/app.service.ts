import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarDto } from './dto/car.dto';
import { Car } from './schema/car.schema';

@Injectable()
export class AppService {

  constructor(@InjectModel('Car') private readonly carModel: Model<Car>) {}
  counter = 0;
 async getRequest(body: CarDto):Promise<any> {
    this.counter = this.counter+1;
    this.create(body);
    return ({
      hits: "This api got hit "+this.counter+" times",
      data: body
    })
  }
  async create(createCarDto: CarDto): Promise<Car> {
    const createdCar = new this.carModel(createCarDto);
    return createdCar.save();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
