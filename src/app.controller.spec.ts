import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const body  = {
        "MIL":"On",
        "DistanceWithMIL":"30",
        "IgnitionType":"spark",
        "FuelStatus":"low",
        "EngineLoad":"50",
        "CoolantTemperature":"85",
        "FuelPressure":"410",
        "EngineSpeed":"1000",
        "MAF":"10"
        }
        const response = {
          "hits": "This api got hit 1 times",
          "data": {
              "MIL": "On",
              "DistanceWithMIL": "30",
              "IgnitionType": "spark",
              "FuelStatus": "low",
              "EngineLoad": "50",
              "CoolantTemperature": "85",
              "FuelPressure": "410",
              "EngineSpeed": "1000",
              "MAF": "10"
          }
      }
      expect(appController.getRequest(body)).toStrictEqual(response);
    });

  });
});
