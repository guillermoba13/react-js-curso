import React, {Component} from 'react';
import PropTypes from 'prop-types';
import  '../index.css';

class Task extends Component{
    StyleCompleted(){
        return(
            {
                fontSize:'20px',
                color: this.props.task.done ? 'gray' : 'black',
                textDecoration: this.props.task.done ? 'line-through':'none'
            }
        );
    }
    render(){
        const {task}=this.props;
        return(
            <div className="TaskSty" style={this.StyleCompleted()}>
                {task.title}
                {task.description}
                {task.done}
                <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
                <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>x</button>
            </div>
        );
    }
}

Task.propTypes={
    task: PropTypes.object.isRequired
}

const btnDelete={
    fontSize:'20px',
    background:'#ea2027',
    color:'#fff',
    border:'none',
    padding:'10px 15px',
    borderRadius:'50%',
    cursor:'pointer'
}

export default Task;
