import React from 'react';

class Ticket extends React.Component{

    buildContent=(data)=>{
        if(data){
          return(
            
            <div>
              {data.data.map(item=>{
              return (
                <div className="ui piled segment" key={item.id}>
        <h4 className="ui header">{item.title}</h4>
        <p className="content">{item.content}</p>
        <br/>
      </div>
              )
            })}</div>
          )
        }
        else{
          <div>Loading...</div>
        }
      }
    render(){
        return(
            <div>
            {this.buildContent(this.props.data)}
            </div>
        )
    }
}

export default Ticket;