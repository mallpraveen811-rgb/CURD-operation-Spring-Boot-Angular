import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Empolyeeservice } from '../empolyee.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  standalone: false,
  templateUrl: './list-employee.html',
  styleUrl: './list-employee.css',
})
export class ListEmployee implements OnInit {

  employees: Employee[] = [];

  constructor(
    private employeeService: Empolyeeservice,
    private router: Router
  ) {
     //this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {

    this.getEmployees();
 
    // Reload data when navigation happens
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     this.getEmployees();
    //   }
    // });

 
  }

  getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data => {
       console.log("Employees loaded:", data);
      this.employees = data;
    });
  }

updateEmployee(id:number){

this.router.navigate(['update-employee',id]);

}

viewEmployee(id:number){
  this.router.navigate(['employee-details',id]);

}

deleteEmployee(id:number){
  
  this.employeeService.deleteEmployeeById(id).subscribe(data=>{
    console.log(data);

    this.getEmployees();
  })
}

}