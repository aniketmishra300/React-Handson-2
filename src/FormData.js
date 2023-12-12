import React, { Component } from 'react'
import './App.css';


export default class FormData extends Component {

    state={
        name : "",
        department : "",
        rank : "",
        rankData:[],
        data : [],
        depData: [],
        

    }
    
    nameChange= (n)=>{
       this.setState({[n.target.name] : n.target.value})
    }

    deptChange=(d)=>{
        this.setState({[d.target.name]: d.target.value}) 
    }

    rateChange=(r)=>{
        this.setState({[r.target.name]:r.target.value}) 
    }

    handleClick = (event)=>{
        event.preventDefault();
            console.log("submitted")
        
    /////////////////////////only for name
        const obj={
            name : this.state.name,
            department: this.state.department,
            rank : this.state.rank
        }
        console.log(this.state.name)
        const value = this.state.data;
        value.push(obj)

        this.setState({[this.state.data]:value})
        console.log(value)
        }

    

  render() {
    return (
      <div>
        <h1>EMPLOYEE FEEDBACK FORM</h1>

        <form onSubmit={this.handleClick}>
            <label class='inputs'>Name : 
                <input type="text" name='name' onChange={this.nameChange} />
            </label>
            <br/>
            <label class='inputs'>Department :
                <input type="text" name='department' onChange={this.deptChange}/>
            </label>
            <br/>
            <label class='inputs'>Rating :
                <input type="number" name='rank' onChange={this.rateChange}/>
            </label>
            <br/>
            <button type='submit' onClick={this.handleClick}>Submit</button>               
        </form>
        
        <div class='flexBox'>
               {this.state.data.map((item,index)=>{
                 return(                       
                    <div class='innerDiv'>
                       <span key={index}>Name: {item.name} || </span>
                        <span key={index}>Department: {item.department} || </span>  
                        <span key={index}>Rating: {item.rank}</span>
                    </div>  
                  ) 
                })}
        </div> 

            
      </div>
    )
  }
}
