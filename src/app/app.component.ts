import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'viewchild';

  constructor(private route: Router){

  }
  inputvariable = "This is parent component";
  getdata(value:any){
    console.log(value);
  }

  navigate(){
    this.route.navigate(["/counter"]);
  }
}
