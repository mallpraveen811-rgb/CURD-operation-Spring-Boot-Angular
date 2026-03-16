import { Component } from '@angular/core';
import { Employee } from '../employee';
import { Empolyeeservice } from '../empolyee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  standalone: false,
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.css',
})
export class CreateEmployee {

employee:Employee=new Employee();

constructor(private employeeService:Empolyeeservice,private route:Router){}

onSubmit(){
this.insertEmployee();
  console.log(this.employee)
}

insertEmployee(){
  this.employeeService.createEmployee(this.employee).subscribe({
    next: (data) => {
      console.log("Employee saved:", data);

      // Navigate to employees list
      this.route.navigate(['/employees']).then(() => {
        // After navigation, reload list page
        window.location.reload();
      });
    },
    error: (err) => {
      console.error("Error saving employee:", err);
    }
  });
}

goToEmployeeList(){
  this.route.navigate(['/employees']);
}

}
