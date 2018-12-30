import { Component, OnInit } from '@angular/core';
import { Task } from '../../Models/task';
import { TaskServiceService } from '../../Services/task-service.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  taskList: Task[];
  constructor(private _taskService: TaskServiceService) {
  }

  ngOnInit() {
    this.taskList = this._taskService.getAllStaticTasks();
    // this._taskService.getAll().subscribe(t => this.taskList = t);
  }
}
