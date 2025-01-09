import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.entity';

@Controller('api/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async getAllItems(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Post()
  async addItem(@Body('title') title: string): Promise<Item> {
    return this.itemsService.create(title);
  }

  @Patch(':id')
  async updateItem(
    @Param('id') id: number,
    @Body('title') title: string,
  ): Promise<void> {
    await this.itemsService.update(id, title);
  }

  @Delete(':id')
  async deleteItem(@Param('id') id: number): Promise<void> {
    await this.itemsService.delete(id);
  }
}
