import { Component } from '@angular/core';
import { Empolyeeservice } from '../empolyee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  standalone: false,
  templateUrl: './update-employee.html',
  styleUrls: ['./update-employee.css'],
})
export class UpdateEmployee {
id:number=0;
employee:Employee = new Employee();
constructor(private EmployeeService: Empolyeeservice,private route: ActivatedRoute,private router: Router){}

ngOnInit():void{

  this.id = this.route.snapshot.params['id'];
this.EmployeeService.getEmployeeById(this.id).subscribe(data=>{

this.employee = data;

});

}
onSubmit(){

this.EmployeeService.updateEmployee(this.id,this.employee).subscribe(data =>{
console.log("Employee updated");
  //this.employee=data;
  this.goToEmployeeList();
});

}
goToEmployeeList(){
  //this.router.navigate(['/employees']);
    // this.router.navigate(['/employees']).then(() => {
    //   window.location.reload();
    // });
  this.router.navigate(['/employees'], { state: { refresh: true } });
setTimeout(() => {
    window.location.reload();
  }, 100);
}

}