import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: "mongodb+srv://dmaitra3:elm63ofpPpq5JMY1@cluster0.ipg672a.mongodb.net/test",
      }),
      inject: [ConfigService],
    })
  ],
})

export class DatabaseModule {}