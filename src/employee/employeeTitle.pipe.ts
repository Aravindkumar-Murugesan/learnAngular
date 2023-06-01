import {Pipe ,PipeTransform} from "@angular/core";
import { pipe } from "rxjs";

@Pipe({
    name: 'employeeTitle'
    
})

export class employeeTitle implements PipeTransform{
 transform(value : string,gender : string) : string{
    if(gender.toLowerCase() == 'male' )
        return 'Mr.' + value ;
        else
        return 'Miss.' + value ;
 }
}