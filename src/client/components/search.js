import React from 'react';
import axios from 'axios';
import './TextSize.css'

class Search extends React.Component{
    state={label: ''}

    onSearch = async (val)=>{
        let filteredData = await axios.get(`http://localhost:3232/api/search/?label=${val}`)
        return filteredData;
    }
    render(){
        
        return(

            <div className="ui fluid icon input">
                <input type="text" placeholder="Search..." onChange={(e)=>this.onSearch(e.target.value).then(filtered=>this.props.onDataChanged(filtered.data))}/>
                <i className="search icon"></i>
            </div>
        )
    }
}

export default Search;