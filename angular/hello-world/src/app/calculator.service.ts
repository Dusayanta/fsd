import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }
  getResult(_number,_limit){
    let data;
    data=[];
    for(let i=1;i<=_limit;i++){
      let result = {
        number : _number,
        quotient : i,
        add : _number + i,
        sub : _number - i,
        mul : _number * i,
        div : _number / i,
      }
      data.push(result)
    }
    return data;
  }
}
