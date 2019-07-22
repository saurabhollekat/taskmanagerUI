import { Component, OnInit } from '@angular/core';
import { Task } from '../../Models/task';
import { SearchTask } from '../../Models/searchTask';
import { DropDownList } from '../../Models/dropdownList';
import { TaskServiceService } from '../../Services/task-service.service';
import { map } from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3/pipe';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  public parenttask: DropDownList [];
  public SearchTask: SearchTask = new SearchTask();
  public Task: Task[];
  constructor(private _taskService: TaskServiceService) { }

  ngOnInit() {
    this.GetAllTask();
    this.GetAllParentTask();
  }

  GetAllParentTask(): void {
    this._taskService.GetParentTask().subscribe(res => {
      this.parenttask = res;
    });
  }

  EndTask(ID: number): void {
    this._taskService.EndTask(ID).subscribe(res => {
      this.GetAllTask();
      alert('Task Ended Successfully');
    });
  }

  DeleteTask(ID: number): void {
    this._taskService.DeleteTask(ID).subscribe(res => {
      this.GetAllTask();
      alert('Task Deleted Successfully');
    });
  }

  SearchTaskList(): void {
    this._taskService.GetAllTaskBySearchCriteria(this.SearchTask).subscribe(data => {
      this.Task = data;
      if (this.SearchTask.ParentTaskID === undefined || this.SearchTask.ParentTaskID == null) {
        this.SearchTask.ParentTaskID = 0;
      }
    }, err => { alert('Error Occured'); });
  }

  GetAllTask(): void {
    this._taskService.GetAllTask().subscribe(data => {
      this.Task = data;
      if (this.SearchTask.ParentTaskID === undefined || this.SearchTask.ParentTaskID == null) {
        this.SearchTask.ParentTaskID = 0;
      }
    }, err => { alert('Error Occured'); });
  }
}
