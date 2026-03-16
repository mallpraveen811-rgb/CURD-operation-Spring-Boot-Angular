import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { Empolyeeservice } from '../empolyee.service';

@Component({
  selector: 'app-employee-details',
  standalone: false,
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails {

id:number=0;
employee:Employee=new Employee();
  constructor(private route:ActivatedRoute,private employeeService:Empolyeeservice){}
    
ngOnInit(): void {

  this.route.params.subscribe(params => {

    this.id = params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {

      this.employee = data;

      console.log(data);

    });

  });

}
}