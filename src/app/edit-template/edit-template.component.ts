import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.css']
})
export class EditTemplateComponent implements OnInit {

  constructor(private template:TemplateService, private router:ActivatedRoute) { }

  editTemplate=new FormGroup({
    name:new FormControl(''),
    fieldlabel:new FormControl(''),
    placeholder:new FormControl(''),
  });

  message:boolean=false;
  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.template.getTemplateById(this.router.snapshot.params.id).subscribe((result:any)=>{
      this.editTemplate=new FormGroup({
        name:new FormControl(result['name']),
        fieldlabel:new FormControl(result['fieldlabel']),
        placeholder:new FormControl(result['placeholder']),
      });
    });
  }
  UpdateData(){
    this.template.updateTemplateData(this.router.snapshot.params.id,this.editTemplate.value).subscribe((result)=>{
      this.message=true;
    })
  }

  removeMessage(){
    this.message=false;
  }

}
