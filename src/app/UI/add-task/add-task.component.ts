import { Component, OnInit } from '@angular/core';
import { Task } from '../../Models/task';
import { DropDownList } from '../../Models/dropdownList';
import { ActivatedRoute } from '@angular/router';
import { TaskServiceService } from '../../Services/task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  public parenttask: DropDownList [];
  public Task: Task = new Task();

  public Taskid: any;
  public ButtonType: any;
  constructor(
    private route: ActivatedRoute,
    private _taskService: TaskServiceService
  ) { }

  ngOnInit() {
    this.Taskid = + this.route.snapshot.paramMap.get('id');
    if (this.Taskid !== 0 && this.Taskid != null) {
      this.ButtonType = 'Update';
      this.GetAllParentTask();
      this._taskService.GetTaskById(this.Taskid).subscribe(data => {
        this.Task = data;
        this.Task.ParentTaskID = (this.Task.ParentTaskID == null ? 0 : this.Task.ParentTaskID);
      }, err => { alert('Error Occured'); });
    } else {
      this.ButtonType = 'Submit';
      this.GetAllParentTask();
      this.Task.ParentTaskID = (this.Task.ParentTaskID == null ? 0 : this.Task.ParentTaskID);
    }
  }

  GetAllParentTask(): void {
    this._taskService.GetParentTask().subscribe(res => {
      this.parenttask = res;
    });
  }

  SumbitTask(): void {
    if (this.ButtonType === 'Submit') {
      this._taskService.AddTask(this.Task).subscribe(data => {
        alert('Task Added successfully');
      }, err => { alert('Error Occured'); });
    } else {
      this._taskService.UpdateTask(this.Task).subscribe(data => {
        alert('Task updated successfully');
      }, err => { alert('Error Occured'); });
    }
  }

  ResetTask(): void {
    this.Task = new Task();
    this.Task.ParentTaskID = (this.Task.ParentTaskID == null ? 0 : this.Task.ParentTaskID);
  }
}
