import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../calculate.service'
@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  constructor(private calc: CalculateService) { }

  ngOnInit() {
  }

  result;
  operand;
  first;
  second;

  perform(event,_first,_second){
    this.operand = event.target.value;
    this.first = parseInt(_first);
    this.second = parseInt(_second);
    switch(this.operand){
      case 'add':
        this.result = this.calc.add(this.first,this.second);
        break;
      case 'sub':
        this.result = this.calc.sub(this.first,this.second);
        break;
      case 'mul':
        this.result = this.calc.mul(this.first,this.second);
        break;
      case 'div':
        this.result = this.calc.div(this.first,this.second);
        break;
      default: this.result=this.first=this.second='';
    }
  }

  increment(){
    switch(this.operand){
      case 'add':
        this.result = this.calc.add(this.result,this.second);
        break;
      case 'sub':
        this.result = this.calc.sub(this.result,this.second);
        break;
      case 'mul':
        this.result = this.calc.mul(this.result,this.second);
        break;
      case 'div':
        this.result = this.calc.div(this.result,this.second);
        break;
      default: this.result=this.first=this.second='';
    }
  }
  reset(){
    this.result=this.first=this.second='';
  }
}

