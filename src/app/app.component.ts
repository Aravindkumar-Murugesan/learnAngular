import { TemplateBindingParseResult } from "@angular/compiler";
import { Component } from "@angular/core";

@Component(
  {
    selector : 'app-root',
    templateUrl : 'app.component.html' ,
    styleUrls : ['app.component.scss']
  }
) 

export class AppComponent{
  name : string = 'hello';
  colSpan : number = 2;
  imagePath: string = 'https://www.prontopanels.com/wp-content/themes/pronto-theme/images/logo.png';
  fistname : string = 'Mahi';
  lastname : string = '07';
  isdisable : boolean = false;
  applyBoldClass: boolean = true;
  applyItalicsClass: boolean = true;
  getFullname() : string{
    return this.fistname + " " + this.lastname;
  }
  addClasses() {
    let classes = {
        boldClass: this.applyBoldClass,
        italicsClass: this.applyItalicsClass
    };

    return classes;
}
}