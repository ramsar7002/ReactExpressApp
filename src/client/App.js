import React from 'react';
import {CreateApiClient} from '../server/api'
import Ticket from './components/Ticket'
import Search from './components/search'
import './App.css'
import TextSize from './components/TextSize'
import NextPrev from './components/NextPrev'



class App extends React.Component {
  state={
    data: '',
    isLoading: true
  };

  getData = (page)=>{
    CreateApiClient(page).then(res=> this.setState({data: res}))
    console.log(this.state.data)
  }

  componentDidMount(){
    this.getData(1);
    document.querySelector('.left').classList.add('disabled');
  }

  onDataChanged= (filteredData)=>{
    this.setState({data: filteredData});
  }

  render(){
  return (
    <div className="main">
      <Search onDataChanged={this.onDataChanged}/>
      select text size:
      <TextSize />
      <Ticket data={this.state.data}/>
      {console.log(this.state.data.numOfPage)}
       <NextPrev getData={this.getData} page={this.state.data.numOfPage}/>
    </div>
  );
}
}

export default App;
