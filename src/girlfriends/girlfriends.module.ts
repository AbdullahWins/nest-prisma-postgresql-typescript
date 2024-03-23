import { Module } from '@nestjs/common';
import { GirlfriendsService } from './girlfriends.service';
import { GirlfriendsController } from './girlfriends.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [GirlfriendsController],
  providers: [GirlfriendsService],
})
export class GirlfriendsModule {}
