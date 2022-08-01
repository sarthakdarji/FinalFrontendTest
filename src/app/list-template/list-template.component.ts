import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-list-template',
  templateUrl: './list-template.component.html',
  styleUrls: ['./list-template.component.css']
})
export class ListTemplateComponent implements OnInit {

  constructor(private template:TemplateService) { }

  templateData: any=[];

  ngOnInit(): void {
    this.template.getAllTemplates().subscribe((allData)=>{
      console.log(allData);
      this.templateData=allData;
    });
  }

  deleteTemplate(template_id:any){
    console.log(template_id);
    this.template.deleteTemplate(template_id).subscribe((result)=>{
      console.log(result);
      this.ngOnInit();
    })
  }

}
