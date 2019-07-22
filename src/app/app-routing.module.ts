import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './UI/add-task/add-task.component';
import { ListTaskComponent } from './UI/list-task/list-task.component';

const routes: Routes = [
  {path: '', redirectTo: '/view', pathMatch: 'full'},
  {path: 'add', component: AddTaskComponent},
  {path: 'view', component : ListTaskComponent},
  {path: 'edit/:id', component : AddTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
