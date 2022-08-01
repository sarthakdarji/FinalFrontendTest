import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.css']
})
export class AddTemplateComponent implements OnInit {

  constructor(private template:TemplateService) { }

  addTemplate=new FormGroup({
    name:new FormControl('',[Validators.required]),
    fieldlabel:new FormControl('',[Validators.required]),
    placeholder:new FormControl('',[Validators.required]),
  });
  message:boolean=false;
  ngOnInit(): void {
  }

  SaveData(){
    this.template.saveTemplateData(this.addTemplate.value).subscribe((result)=>{
      console.log(result);
      this.message=true;
      this.addTemplate.reset({});
    });
  }
  removeMessage(){
    this.message=false;
  }

}
