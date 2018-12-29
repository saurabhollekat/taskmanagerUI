import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../Models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  TaskList: Task[];
  constructor(private _httpClient: HttpClient) {
    this.TaskList = [
      {
        Name: 'Task1',
        ParentName: 'None',
        Priority: 1,
        SDate: new Date(),
        EDate: new Date(2018, 1, 1)
      },
      {
        Name: 'Task2',
        ParentName: 'None',
        Priority: 2,
        SDate: new Date(),
        EDate: new Date(2018, 2, 2)
      },
      {
        Name: 'Task3',
        ParentName: 'Task1',
        Priority: 3,
        SDate: new Date(),
        EDate: new Date(2018, 3, 3)
      },
      {
        Name: 'Task4',
        ParentName: 'None',
        Priority: 4,
        SDate: new Date(),
        EDate: new Date(2018, 4, 4)
      },
      {
        Name: 'Task5',
        ParentName: 'Task2',
        Priority: 5,
        SDate: new Date(),
        EDate: new Date(2018, 5, 5)
      }
    ];
  }

  getAllTasks() {
    return this.TaskList;
  }
}
