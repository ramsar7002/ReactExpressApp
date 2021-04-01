import React from 'react'
import '../App.css'

class NextPrev extends React.Component{
    changePage=(e)=>{
        document.querySelector('.left').classList.remove('disabled');
        document.querySelector('.right').classList.remove('disabled');
       
        if(e.target.textContent==='Previous'){
            if(this.props.page.currentPage-1===this.props.page.startPage){
                document.querySelector('.left').classList.add('disabled');
            }
            this.props.getData(this.props.page.currentPage-1);
        }
        else{
            if(this.props.page.currentPage+1===this.props.page.lastPage){
                document.querySelector('.right').classList.add('disabled');
            }
            this.props.getData(this.props.page.currentPage+1);
        }

        window.scrollTo(0,0);
    }

    render(){
        return(
            <div className="nextPrevBtn">
                <button className="ui left floated button" onClick={this.changePage}>Previous</button>
                <button className="ui right floated button" onClick={this.changePage}>Next</button>
            </div>
        )
    }
}

export default NextPrev;