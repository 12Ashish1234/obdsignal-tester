import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './db/database.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CarSchema } from './schema/car.schema';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Car', schema: CarSchema }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
