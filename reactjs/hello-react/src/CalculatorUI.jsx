import React,{ Component } from "react";

export class CalculatorUI extends Component{
    constructor(){
        super()
        this.first = 0
        this.second = 0
        this.result = ''
        this.perform = this.perform.bind(this)
        this.handleNumber1 = this.handleNumber1.bind(this)
        this.handleNumber2 = this.handleNumber2.bind(this)
        this.state ={result:''}
    }
    perform(e){
        let operand = e.target.value
        switch(operand){
            case 'ADD' : this.result = this.first + this.second
                            this.state.result = this.result
                break
            case 'SUB' : this.result = this.first - this.second
                break
            case 'MUL' : this.result = this.first * this.second
                break
            case 'DIV' : this.result = this.first / this.second
                break
            default: this.result=''   
        }
        document.getElementById('result').innerText = this.result
    }
    handleNumber1(e)
    {
        this.first = parseInt(e.target.value)
    }
    handleNumber2(e)
    {
        this.second = parseInt(e.target.value)
    }
    render(){
        return(
            <div>
                <div>
                    <div>
                        <input type="text" id="display"/>
                    </div>
                    <div className="row1">
                        <button onClick={()=>document.getElementById('display').value+='1'}>1</button>
                        <button onClick={()=>document.getElementById('display').value+='2'}>2</button>
                        <button onClick={()=>document.getElementById('display').value+='3'}>3</button>
                    </div>
                    <div className="row2">
                        <button onClick={()=>document.getElementById('display').value+='4'}>4</button>
                        <button onClick={()=>document.getElementById('display').value+='5'}>5</button>
                        <button onClick={()=>document.getElementById('display').value+='6'}>6</button>
                    </div>
                    <div className="row3">
                        <button onClick={()=>document.getElementById('display').value+='7'}>7</button>
                        <button onClick={()=>document.getElementById('display').value+='8'}>8</button>
                        <button onClick={()=>document.getElementById('display').value+='9'}>9</button>
                    </div>
                    <div className="row4">
                        <button onClick={()=>document.getElementById('display').value+='0'}>0</button>
                        <button onClick={()=>document.getElementById('display').value+='+'}>+</button>
                        <button onClick={()=>document.getElementById('display').value+='-'}>-</button>
                    </div>
                    <div className="row5">
                        <button onClick={()=>document.getElementById('display').value+='*'}>*</button>
                        <button onClick={()=>document.getElementById('display').value+='/'}>/</button>
                        <button onClick={()=>document.getElementById('display').value=eval(document.getElementById('display').value)}>=</button>
                    </div>
                    <button onClick={()=>document.getElementById('display').value=''}>C</button>
                </div>
                <div>
                    <label htmlFor="number1">First Number :</label>&nbsp;
                    <input type="number" name="number1" onChange={this.handleNumber1}/>&nbsp;&nbsp;
                    <label htmlFor="number2">Second Number</label>&nbsp;
                    <input type="number" name="number2" onChange={this.handleNumber2}/>
                </div>
                <div>
                    <select name="" id="selects" onChange={this.perform}>
                        <option value="">Select operation</option>
                        <option value="ADD">ADD</option>
                        <option value="SUB">SUB</option>
                        <option value="MUL">MUL</option>
                        <option value="DIV">DIV</option>
                    </select>
                    <span id="result">{this.state.result}</span>
                </div>
            </div>
        )
    }
}