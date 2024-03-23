import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GirlfriendsService } from './girlfriends.service';
import { Prisma } from '@prisma/client';

@Controller('girlfriends')
export class GirlfriendsController {
  constructor(private readonly girlfriendsService: GirlfriendsService) {}

  @Post()
  create(@Body() createGirlfriendDto: Prisma.GirlFriendsCreateInput) {
    return this.girlfriendsService.create(createGirlfriendDto);
  }

  @Get()
  findAll() {
    return this.girlfriendsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.girlfriendsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGirlfriendDto: Prisma.GirlFriendsUpdateInput,
  ) {
    return this.girlfriendsService.update(+id, updateGirlfriendDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.girlfriendsService.remove(+id);
  }
}
