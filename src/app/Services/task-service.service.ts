import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Task } from '../Models/task';
import { SearchTask } from '../Models/searchTask';
import { Response } from 'selenium-webdriver/http';
import { environment } from '../../environments/environment';
import { pipe } from '@angular/core/src/render3/pipe';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  url: String = 'http://localhost:51703/api/';
  constructor(private _http: HttpClient) { }

  GetAllTaskBySearchCriteria(item: SearchTask): Observable<any> {
    return this._http.post(this.url + 'Tasks/Search', item, httpOptions)
    .pipe(map((res: Response) => res), catchError((err: Response) => throwError(err)));
  }

  GetAllTask(): Observable<any> {
    return this._http.post(this.url + 'Tasks', '', httpOptions)
    .pipe(map((res: Response) => res), catchError((err: Response) => throwError(err)));
  }

  GetParentTask(): Observable<any> {
    return this._http.get(this.url + 'Tasks/Parent')
    .pipe(map((res: Response) => res), catchError((err: Response) => throwError(err)));
  }

  GetTaskById(id: number): Observable<any> {
    return this._http.get(this.url + 'Tasks/' + id)
    .pipe(map((res: Response) => res), catchError((err: Response) => throwError(err)));
  }

  AddTask (item: Task): Observable<any> {
    return this._http.post(this.url + 'Tasks/Add', item, httpOptions)
    .pipe(map((res: Response) => res), catchError((err: Response) => throwError(err)));
  }

  UpdateTask(item: Task): Observable<any> {
    return this._http.post(this.url + 'Tasks/Update', item)
    .pipe(map((res: Response) => res), catchError((err: Response) => throwError(err)));
  }

  EndTask(id: number): Observable<any> {
    return this._http.get(this.url + 'Tasks/End/' + id)
    .pipe(map((res: Response) => res), catchError((err: Response) => throwError(err)));
  }

  DeleteTask(id: number): Observable<any> {
    return this._http.get(this.url + 'Tasks/Delete/' + id)
    .pipe(map((res: Response) => res), catchError((err: Response) => throwError(err)));
  }
}
