import { Repository } from 'typeorm';
import { Item } from './item.entity';
export declare class ItemsService {
    private readonly itemsRepository;
    constructor(itemsRepository: Repository<Item>);
    findAll(): Promise<Item[]>;
    create(title: string): Promise<Item>;
    update(id: number, title: string): Promise<void>;
    delete(id: number): Promise<void>;
}
