import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './UI/add-task/add-task.component';
import { ListTaskComponent } from './UI/list-task/list-task.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'add', component: AddTaskComponent},
      {path: 'home', component: ListTaskComponent},
      {path: '', component: ListTaskComponent}])
  ],
  declarations: [
    AppComponent,
    AddTaskComponent,
    ListTaskComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
