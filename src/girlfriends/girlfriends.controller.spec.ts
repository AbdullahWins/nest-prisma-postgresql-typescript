import { Test, TestingModule } from '@nestjs/testing';
import { GirlfriendsController } from './girlfriends.controller';
import { GirlfriendsService } from './girlfriends.service';

describe('GirlfriendsController', () => {
  let controller: GirlfriendsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GirlfriendsController],
      providers: [GirlfriendsService],
    }).compile();

    controller = module.get<GirlfriendsController>(GirlfriendsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
