import { Component, OnInit,DoCheck,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit,DoCheck,OnDestroy {
  
 
  str:string='';
  upperCaseStr:string='';
  lowerCaseStr:string='';
  
  constructor() { }
  

  ngOnInit() {
    console.log("init");
  }
  
  ngDoCheck(): void {
    this.upperCaseStr=this.str.toUpperCase();
    this.lowerCaseStr=this.str.toLowerCase();
  }

  ngOnDestroy(): void {
    console.log("destroy");
  }

}
