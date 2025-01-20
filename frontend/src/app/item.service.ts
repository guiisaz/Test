import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Item {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private apiUrl = 'http://localhost:4200/api/items'; 

  constructor(private http: HttpClient) {}


  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }


  addItem(title: string): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, { title });
  }


  updateItem(id: number, title: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, { title });
  }

  // Método para deletar um item
  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
