import { Component,Input } from "@angular/core";

@Component({
    selector : 'employee-count',
    templateUrl : 'employeeCount.component.html',
    styleUrls :  ['employeeCount.component.css']
})

export class employeeCount{
    @Input()
    all : number = 0;
    @Input()
    male : number =0 ;
    @Input()
    female : number =0;
}