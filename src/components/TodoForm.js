import React, {Component} from "react";

class TodoForm extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            responsable: '',
            descripcion: '',
            prioridad: 'Baja'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInput(e){
        //console.log(e.target.value, e.target.name);
        const { value, name} = e.target;
        this.setState({
            [name] : value
        })
        //console.log(this.state);
    }
    handleSubmit(e){
        e.preventDefault();
        //alert("Enviando los datos..");
        this.props.onAddTodo(this.state);
        //console.log(this.state);
    }
    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group row mb-3">
                        <input
                            type="text"
                            name="title"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Titulo" 
                        />
                    </div>
                    <div className="form-group row mb-3">
                        <input
                            type="text"
                            name="responsable"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Responsable" 
                        />
                    </div>
                    <div className="form-group row mb-3">
                        <input
                            type="text"
                            name="descripcion"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Descripcion" 
                        />
                    </div>
                    <div className="form-group row mb-3">
                        <select
                            name="prioridad"
                            className="form-select"    
                            onChange={this.handleInput}                       
                        >
                            <option>Baja</option>
                            <option>Media</option>
                            <option>Alta</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        );
    }
}

export default TodoForm;