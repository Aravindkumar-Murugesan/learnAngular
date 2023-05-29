import { Component } from "@angular/core";

@Component({
    selector : 'employee-app',
    templateUrl : '/employee.component.html',
    styleUrls: ['/employee.component.scss']
})

export class employeeComponent{
    firstName: string = "Aravind";
    lastName: string = "M";
    gender: string ="Male";
    age : number = 27;
    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}