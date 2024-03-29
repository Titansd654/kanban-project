import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  constructor() { }

  getBoards(): Observable<any[]> {
    const boards = [
      { id: '1', title: 'First board'},
      { id: '2', title: 'Second board'},
      { id: '3', title: 'Third board'},
    ];
    return of(boards).pipe(delay(2000));
  }
}
