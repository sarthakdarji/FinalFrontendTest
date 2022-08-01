import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  url='https://us-central1-prashil-template-maker.cloudfunctions.net/template?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZW1wbGF0ZS1tYWtlciIsIm5hbWUiOiJTYXJ0aGFrIERhcmppIiwiaWF0IjoxNjU5MzI3NTU1fQ.ZP6O_2-ZIPMyO4MDjfN_rglDgTKMBK4cj3YDVsQvyHo'
  
  url1='https://us-central1-prashil-template-maker.cloudfunctions.net/template'
  constructor(private http:HttpClient) { }

  getAllTemplates(){
    return this.http.get(this.url);
  }

  saveTemplateData(data:any){
    console.log(data);
    return this.http.post(this.url, data);
  }

  deleteTemplate(id:any){
    return this.http.delete(`${this.url1}/${id}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZW1wbGF0ZS1tYWtlciIsIm5hbWUiOiJTYXJ0aGFrIERhcmppIiwiaWF0IjoxNjU5MzI3NTU1fQ.ZP6O_2-ZIPMyO4MDjfN_rglDgTKMBK4cj3YDVsQvyHo`);
  }

  getTemplateById(id:any){
    return this.http.get(`${this.url1}/${id}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZW1wbGF0ZS1tYWtlciIsIm5hbWUiOiJTYXJ0aGFrIERhcmppIiwiaWF0IjoxNjU5MzI3NTU1fQ.ZP6O_2-ZIPMyO4MDjfN_rglDgTKMBK4cj3YDVsQvyHo`);
  }

  updateTemplateData(id:any,data:any){
    return this.http.put(`${this.url1}/${id}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZW1wbGF0ZS1tYWtlciIsIm5hbWUiOiJTYXJ0aGFrIERhcmppIiwiaWF0IjoxNjU5MzI3NTU1fQ.ZP6O_2-ZIPMyO4MDjfN_rglDgTKMBK4cj3YDVsQvyHo`,data);
  }
}
