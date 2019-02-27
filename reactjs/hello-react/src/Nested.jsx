import React,{ Component } from "react";

export class Nested extends Component{
    constructor(){
        super()
        this.state={msg: "Hey testing state"}
    }
    changeBgColor(){
        let random = parseInt(Math.random()*100),
            random2 = parseInt(Math.random()*100)+parseInt(Math.random()*10),
            random3 = parseInt(Math.random()*100)+parseInt(Math.random()*19)
        document.body.style.backgroundColor = `rgb(${random},${random2},${random3})`
    }
    render(){
        return(
            <div id="div1">
                <button id="btn" onClick={()=>this.changeBgColor()}>Click to change color</button>
                <span id="head-text"></span>
            </div>
        )
    }
}