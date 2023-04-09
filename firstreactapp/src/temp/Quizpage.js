import React, { Component } from "react";
import DashboardHeader from "./DashboardHeader";

import { Card } from "react-bootstrap";
class Quizpage extends Component{


    render(){
        return(
            <div>
            <DashboardHeader/>

            <div className="px-5 mt-3">
            <Card>
                <Card.Body>
                    <h1>Quizpage</h1>
                </Card.Body>        
            </Card>
            </div>
            </div>    
        );
    }

}
export default Quizpage;