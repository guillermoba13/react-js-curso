import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import tasks from './samples/tasks.json';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Task from './components/Task';
import Posts from './components/Posts.js'; 
import Home from './components/Home.js';

class App extends Component{
  state ={
    tasks: tasks
  }
  addTask = (title, description) =>{
    const newTask={
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({tasks: [...this.state.tasks, newTask]})
  }

  deleteTask = (id) =>{
    const newTask= this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTask})
  }

  checkDone = (id) =>{
    const newTasks = this.state.tasks.map(task => {
      if(task.id === id){
        task.done = !task.done
      }
      return task;
    })
    this.setState({tasks: newTasks})
  }

  render(){
    return(
      <div>
        <Router>
          <Route exact path="/">
            <Link to="/home">Home</Link>
            <br/>
            <Link to="/task">Tasks</Link>
            <br/>
            <Link to="/posts">Posts</Link>
          </Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/task" render={() => {
                return<div>
                    <TaskForm addTask={this.addTask} /> 
                    <Tasks tasks={this.state.tasks} 
                          deleteTask={this.deleteTask}
                          checkDone={this.checkDone}/>
                  </div>
                }}>
          </Route>
          <Route exact path="/posts" component={Posts} />
        </Router>
      </div>
    );
  }
}

export default App;
