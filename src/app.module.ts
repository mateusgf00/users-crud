import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://mateusgf00:Senha9170@cluster0.jyn7rf0.mongodb.net/test'), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
