import { Component } from 'react';
import ShowList from './components/ShowList';
class App extends Component{
  constructor() {
    super();
    this.state = {     
      lista : ["Amarillo", "Azul", "Rojo", "Verde"]
    }
  }
  render(){    
    return (
      <div className="App">
          <div className='row'>
            <ShowList lista={this.state.lista} />
          </div>
      </div>
    );
  }
}
export default App;
