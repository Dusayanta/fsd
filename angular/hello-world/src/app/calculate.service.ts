import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }
  add(_first,_second){
    return _first + _second;
  }
  sub(_first,_second){
    return _first - _second;
  }
  mul(_first,_second){
    return _first * _second;
  }
  div(_first,_second){
    return _first / _second;
  }
}
