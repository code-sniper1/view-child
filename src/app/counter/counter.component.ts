import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit{
   count: number = 0;
   count2: number = 1;
//   @Input() myInput!:string;
//   @Output() myoutput:EventEmitter<string>=new EventEmitter();
//   outputstring = 'this is child'
// // massage: string = "";
// // count: number = 0;
// //    constructor(){}
// //     increasebyone(){
// //       this.count = this.count+1;
// //       this.massage = "counter "+ this.count;
// //     }
// //     decreasebyone(){
// //       this.count = this.count -1;
// //       this.massage = 'counter ' + this.count;
// //     }
// ngOnInit(){
//   console.log(this.myInput);
// }
// senddata(){
//   this.myoutput.emit(this.outputstring);
// }
counter(){
this.count++;
this.count2++;
}


ngOnInit(): void {
    console.log("hello form parent" );
    
}
}
