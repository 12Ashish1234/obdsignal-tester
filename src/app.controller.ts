import { Body, Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { CarDto } from './dto/car.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Get()
  async getRequest(@Body() body:CarDto) {
    try{
      return  this.appService.getRequest(body);
    }
    catch(e){
      return e;
    }
  }
}
