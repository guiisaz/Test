import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  listTitle: string = 'My Todo List';
  listItems = [
    { id: 1, title: 'Item 1', editing: false },
    { id: 2, title: 'Item 2', editing: false },
    // Add more items as needed
  ];
  newItemTitle: string = '';

  onAddItem() {
    if (this.newItemTitle.trim()) {
      const newItem = {
        id: Date.now(),
        title: this.newItemTitle.trim(),
        editing: false,
      };
      this.listItems.push(newItem);
      this.newItemTitle = '';
    }
  }

  onDeleteItem(itemId: number) {
    this.listItems = this.listItems.filter(item => item.id !== itemId);
  }

  onEditItem(itemId: number) {
    this.listItems = this.listItems.map(item => {
      if (item.id === itemId) {
        item.editing = true;
      }
      return item;
    });
  }

  onUpdateItem(itemId: number, updatedTitle: string) {
    this.listItems = this.listItems.map(item => {
      if (item.id === itemId) {
        item.title = updatedTitle.trim();
        item.editing = false;
      }
      return item;
    });
  }
}
