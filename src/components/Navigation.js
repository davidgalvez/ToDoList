import React, {Component} from "react";

class Navigation extends Component{
    render(){
        return(
            <nav className='navbar navbar-dark bg-dark'>
                <a href='/#' className='text-white'>
                    {this.props.titulo} 
                    <span className="badge bg-light text-black ml-8">
                        {this.props.ntareas}
                    </span>
                </a>
            </nav>
        );        
    }
}
export default Navigation;