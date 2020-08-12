import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.css']
})
export class NewUsersComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  createUser(): void{
    
      this.router.navigate(['/new-user'])
    } 
   
  
  cancel(): void{

    this.router.navigate(['/user'])
  }
}

