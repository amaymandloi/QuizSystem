import React, { Component } from 'react';
import axios from 'axios';
import Countdowntimer from './Countdowntimer';
import './timer.css';
import './Home.css';
import { Card } from 'react-bootstrap';

class RetriveQuestions extends React.Component {
    constructor() {
        super();
        this.state = {
            questions: [],
            userAnswer:[],
            answers:[],
           email:'',
            marks:0,
            percentage:0.0,
            status:0,
            quizId:0,
            result:''
      
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        
        axios.all([
            axios.get("http://localhost:8082/quizApp/questionapi/questions"),
            axios.get("http://localhost:8082/quizApp/questionapi/answers"),
            axios.get("http://localhost:8082/quizApp/questionapi/quizId")

        ])
        .then(response => {
          
            this.setState({ questions: response[0].data })
            this.setState({answers:response[1].data})
            this.setState({quizId:response[2].data})
          

        }).catch(console.log);
    }
    handleChange(event){
        this.state.userAnswer.push(event.target.value);
        this.setState({value:event.target.value});
        //console.log(typeof this.state.userAnswer);
    }
   
    handleSubmit(event){
        event.preventDefault();

        let countScore=0;
        this.state.answers.forEach((element,index)=>{
        let correctAnswer=element;
        let givenAnswer=this.state.userAnswer[index];
        let flag=correctAnswer===givenAnswer;
    if(flag){
     countScore++;
    }
        });
            this.setState({marks:countScore,percentage:countScore*5});
            
          console.log("marks: ",this.state.marks);
          console.log("percentage: ",this.state.percentage);
  
     if(countScore*5>=60)
     {
        this.setState({status:this.state.status=1});
        this.setState({result:"Pass"});
     
     }else
     {
        this.setState({status:this.state.status=0});
        this.setState({result:"Fail"});
     
     }
    axios({
        method:'POST',
        url:'http://localhost:8082/quizApp/resultapi/result',
        data:{
            marks:countScore,
            percentage:countScore*5,
            quizId:this.state.quizId,
            email:sessionStorage.getItem('email'),
            status:this.state.status,    
        }
        })
   
        window.location="/results";
    }
   
   render() {

    sessionStorage.setItem('result',this.state.result);
    sessionStorage.setItem('quizid',this.state.quizId);
    sessionStorage.setItem('marks',this.state.marks);
    sessionStorage.setItem('percentage',this.state.percentage);
  
        return (
            <React.Fragment>
                  <div className="time">
                        <a><Countdowntimer/></a>
                    </div>
                    <div class='questions' >
                    <Card style={{ width:'50rem',marginBottom:'1%', marginLeft:'5%'}}>
                    <Card.Body className="shadow-lg mt-20">
                
                    <form onSubmit={this.handleSubmit}>
                       <legend class='legend'>Questions</legend>
                        {this.state.questions.map((q)=>(
                            
                            <div  key={q.questionId}>
                                           
                                            <br></br>
                                            Q.({q.questionId}) {q.question}
                                            
                                            <br></br>
                                            <input type="radio"  name={"option-Q"+q.questionId} value={q.option1}  onChange={this.handleChange}/>
                                            <label className="op1" >{q.option1}</label>
                                            <br></br>
                    
                                            <input type="radio" name={"option-Q"+q.questionId} value={q.option2}  onChange={this.handleChange}/>
                                            <label className="op1" >{q.option2}</label>
                                            <br></br>

                                            <input type="radio" name={"option-Q"+q.questionId} value={q.option3} onChange={this.handleChange}/>
                                            <label className="op1">{q.option3}</label>
                                            <br></br>

                                            <input type="radio" name={"option-Q"+q.questionId} value={q.option4}  onChange={this.handleChange}/>
                                            <label className="op1" >{q.option4}</label> 
                                            <br></br>                            
                           </div> 
                        )    
                    )}<br></br>
                <button >Submit</button>
                </form>
            
            </Card.Body>
            </Card>
            </div> 
            </React.Fragment>
        );
    }
}
export default RetriveQuestions;