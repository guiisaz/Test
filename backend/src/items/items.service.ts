import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemsRepository: Repository<Item>,
  ) {}

  async findAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  async create(title: string): Promise<Item> {
    const newItem = this.itemsRepository.create({ title });
    return this.itemsRepository.save(newItem);
  }

  async update(id: number, title: string): Promise<void> {
    await this.itemsRepository.update(id, { title });
  }

  async delete(id: number): Promise<void> {
    await this.itemsRepository.delete(id);
  }
}
