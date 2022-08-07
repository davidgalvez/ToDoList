import React, {Component} from "react";

class ShowList extends Component
{
    render()
    {
        return(
            <ul>
                {                    
                    this.props.lista.map((item,i)=>
                    {
                        return(
                            <li key={i}>{item}</li>
                        );                        
                    })
                }
            </ul>
        );
    }
}
export default ShowList;