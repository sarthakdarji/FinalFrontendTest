import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ListTemplateComponent } from './list-template/list-template.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { AddTemplateComponent } from './add-template/add-template.component';  

@NgModule({
  declarations: [
    AppComponent,
    ListTemplateComponent,
    EditTemplateComponent,
    AddTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
