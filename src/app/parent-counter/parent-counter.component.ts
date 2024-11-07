import { Conditional } from '@angular/compiler';
import { Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';


@Component({
  selector: 'app-parent-counter',
  templateUrl: './parent-counter.component.html',
  styleUrls: ['./parent-counter.component.scss']
})
export class ParentCounterComponent implements OnInit,  OnChanges{
// @ViewChild(CounterComponent) counter! : CounterComponent;
// increase(){
//   this.counter.increasebyone();
// }
// decrease(){
//   this.counter.decreasebyone();
// }
@Input() data: any;
@Input() data2: any;
constructor(){}

ngOnInit(): void {
    console.log('hello from child');
    
}

ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
}

}
