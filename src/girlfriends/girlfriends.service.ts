import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class GirlfriendsService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createGirlfriendDto: Prisma.GirlFriendsCreateInput) {
    return this.databaseService.girlFriends.create({
      data: createGirlfriendDto,
    });
  }

  findAll() {
    return this.databaseService.girlFriends.findMany();
  }

  findOne(id: number) {
    return this.databaseService.girlFriends.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateGirlfriendDto: Prisma.GirlFriendsUpdateInput) {
    return this.databaseService.girlFriends.update({
      where: {
        id,
      },
      data: updateGirlfriendDto,
    });
  }

  remove(id: number) {
    return this.databaseService.girlFriends.delete({
      where: {
        id,
      },
    });
  }
}
