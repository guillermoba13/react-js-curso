import React, {Component} from 'react';
import  '../index.css';

export default class TaskForm extends Component{
    state={
        title:'',
        description:''
    }

    onSubmit = (e) =>{  
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault();
    }

    onChange = (e) =>{
        this.setState({
        [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <form className="FormSty" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="title" 
                    placeholder="write a Task:" 
                    onChange={this.onChange} 
                    value={this.state.title}/>
                <br/>
                <br/>
                <textarea 
                    className="Textarea" 
                    placeholder="Write a Description" 
                    name="description"
                    onChange={this.onChange} 
                    value={this.state.description}>
                </textarea>
                <br/>
                <br/>
                <input type="submit"/>
            </form>
        );
    }
}

