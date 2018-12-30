import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../Models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  url: String = 'http://localhost:3000/';
  TaskList: Task[];
  constructor(private _httpClient: HttpClient) {
    this.TaskList = [
      {
        TaskID: 1,
        TaskName: 'Task1',
        ParentTaskID: 0,
        ParentTaskName: 'None',
        Priority: 1,
        StartDate: new Date(),
        EndDate: new Date(2018, 1, 1)
      },
      {
        TaskID: 2,
        TaskName: 'Task2',
        ParentTaskID: 0,
        ParentTaskName: 'None',
        Priority: 2,
        StartDate: new Date(),
        EndDate: new Date(2018, 2, 2)
      },
      {
        TaskID: 3,
        TaskName: 'Task3',
        ParentTaskID: 1,
        ParentTaskName: 'Task1',
        Priority: 3,
        StartDate: new Date(),
        EndDate: new Date(2018, 3, 3)
      },
      {
        TaskID: 4,
        TaskName: 'Task4',
        ParentTaskID: 0,
        ParentTaskName: 'None',
        Priority: 4,
        StartDate: new Date(),
        EndDate: new Date(2018, 4, 4)
      },
      {
        TaskID: 5,
        TaskName: 'Task5',
        ParentTaskID: 2,
        ParentTaskName: 'Task2',
        Priority: 5,
        StartDate: new Date(),
        EndDate: new Date(2018, 5, 5)
      }
    ];
  }

  getAllStaticTasks() {
    return this.TaskList;
  }

  // Get all task details
  getAll(): Observable<any> {
    return this._httpClient.get(this.url + 'GetAll').pipe(map((res: Response) => res));
  }

  // Get task details by id
  get(id: Number): Observable<any> {
    return this._httpClient.get(this.url + 'Get/' + id).pipe(map((res: Response) => res));
  }

  // Create new task
  post(task: Task): Observable<any> {
    return this._httpClient.post(this.url + 'Post', task).pipe(map((res: Response) => res));
  }

  // Update a task
  put(task: Task): Observable<any> {
    return this._httpClient.put(this.url + 'Put', task).pipe(map((res: Response) => res));
  }

  // delete a task
  delete(id: Number): Observable<any> {
    return this._httpClient.delete(this.url + 'Delete/' + id).pipe(map((res: Response) => res));
  }
}
