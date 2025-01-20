import { ItemsService } from './items.service';
import { Item } from './item.entity';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    getAllItems(): Promise<Item[]>;
    addItem(title: string): Promise<Item>;
    updateItem(id: number, title: string): Promise<void>;
    deleteItem(id: number): Promise<void>;
}
