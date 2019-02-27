import React,{ Component } from "react";
import { Nested } from "./Nested";
export class Test extends Component{
    render(){
        return(
            <div>
                <h1>Learning ReactJS</h1>
                <Nested msg="Hey Nested tag attribute"/>
            </div>
        )
    }
}