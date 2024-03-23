import { Test, TestingModule } from '@nestjs/testing';
import { GirlfriendsService } from './girlfriends.service';

describe('GirlfriendsService', () => {
  let service: GirlfriendsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GirlfriendsService],
    }).compile();

    service = module.get<GirlfriendsService>(GirlfriendsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
