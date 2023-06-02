import { Component,Input,Output,EventEmitter } from "@angular/core";

@Component({
    selector : 'employee-count',
    templateUrl : 'employeeCount.component.html',
    styleUrls :  ['employeeCount.component.css']
})

export class employeeCount{
    selectedvalue :  string = 'All';
    @Input()
    all : number = 0;
    @Input()
    male : number =0 ;
    @Input()
    female : number =0;

    @Output()
    countButtonSelectionChanged : EventEmitter<string> = new EventEmitter<string>();

    onRadioButtonSelectionChange() {
        this.countButtonSelectionChanged
            .emit(this.selectedvalue);
            console.log(this.selectedvalue)
    }
}