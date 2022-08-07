import { Component } from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';
import packageInfo from './api/todos.json';
class App extends Component{
  constructor() {
    super();
    this.state = {
      todos : packageInfo.todos,     
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
    //this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }
  handleAddTodo(todo){
    this.setState({
      todos : [...this.state.todos,todo]
    })
  }
  handleRemoveTodo(index){
    console.log(index);
    if(window.confirm("Estas seguro que deseas eliminar esta tarea?"))
    {
      this.setState({
        todos:this.state.todos.filter((e,i)=>{
          return i !== index
        })
      })
    }
    
  }
  render(){
    const todos = this.state.todos.map((todo,i)=>{
      return(
        <div className='col-md-4' key={i}>
          <div className='card mt-4'>
            <div className='card-header'>
              <h3>{todo.title}</h3>
              <span className='badge bg-danger ml-2'>
                  {todo.prioridad}
              </span>
            </div>  
            <div className='card-body'>
              <p>{todo.descripcion}</p>
              <p>{todo.responsable}</p>
            </div>
            <div className='card-footer'>
              <button className='btn btn-danger' onClick={this.handleRemoveTodo.bind(this,i)}>
                Delete
              </button>
            </div>        
          </div>
        </div>        
      )
    })
    return (
      <div className="App">      
        <Navigation titulo="Todo List" ntareas={this.state.todos.length} />
        
        <div className="container">
          <div className='row mt-4'>
            <div className='col-md-4'>
              <div className='row'><TodoForm onAddTodo={this.handleAddTodo} /></div>              
            </div>
            <div className='col-md-8'>
              <div className='row'>
                {todos}
              </div>              
            </div>            
          </div>
        </div>
        
        <header className="App-header">
        
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;