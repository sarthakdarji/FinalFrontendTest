import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTemplateComponent } from './list-template/list-template.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { AddTemplateComponent } from './add-template/add-template.component';

const routes: Routes = [
  {
    path:'add',
    component:AddTemplateComponent
  },
  {
    path:'edit/:id',
    component:EditTemplateComponent
  },
  {
    path:'list',
    component:ListTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
