import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './navegation';
import Addtarea from './Addtarea';
import {todos} from './datos.json'; 

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    };
    this.handleAddtarea = this.handleAddtarea.bind(this);
  }
  
  handleAddtarea (todo){
    this.setState({
      todos:[...this.state.todos, todo]
    })
  }
  render() {
    const tareas = this.state.todos.map((task,i) => {
      return(
        <div className = "col-md-4">
          <div className = "card mt-4">
            <h3>{task.title}</h3>
            <span className="badge badge-warning">{task.priority}</span>
          </div>
          <div className="card-body">
            <p>{task.responsible}</p>
            <p>{task.description}</p>
          </div>
        </div>        
      )
    })
    return (
      <div className="App">
        <Navigation titulo = {'Task ' + this.state.todos.length} />
       
        <header className="App-header">        
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Orion Montoya Correa</h1>          
        </header>

        <Addtarea onAddtarea = {this.handleAddtarea}/>
        
        <div className = "container">
           <div className = "row mt-5">
            {tareas}
            </div>
          </div>

      </div>
    );
  }
}

export default App;
