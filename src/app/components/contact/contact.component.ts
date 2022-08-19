import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from 'src/app/shared/components/can-deactivate/component-can-deactivate';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends ComponentCanDeactivate {

  public isFormValid:any;
  
  //constructor() { }

  ngOnInit() {
    //Update this field value true/false based on the form validation or any other way you want.
    //I set it default false. Now try to click on home page, try to close tab, or page reload will show confirmation dialog.
    this.isFormValid=false;
  }

  //Page refresh
  //browser tab close ask user to save data. 
  //click on other nav item
  canDeactivate():boolean {    
    if(this.isFormValid)
    {
      return true;
    }
    return false;
  } 

}
