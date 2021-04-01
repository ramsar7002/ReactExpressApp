import React from 'react'

class TextSize extends React.Component{
    state = {TextSize: 'normal'}

    onTextSizeChanged=(e)=>{
        const sizeName = e.target.textContent;
        let clsNme = 'sml';
        let size=12;
        if(sizeName==='Small') {
            size=12;
            clsNme='sml';
        }
        else
        if(sizeName==='Medium') {
            size=14;
            clsNme='mdm'
        }
        else {
            size = 16;
            clsNme='lrg'
        }
        

        const smallBtn = document.querySelector(".sml");
        const mediumBtn = document.querySelector(".mdm");
        const largeBtn = document.querySelector(".lrg");

        if(smallBtn && mediumBtn && largeBtn){
        smallBtn.classList.remove('disabled');
        mediumBtn.classList.remove('disabled');
        largeBtn.classList.remove('disabled');
        }
        document.querySelector('.content').style.fontSize=`${size}px`;
        document.querySelector(`.${clsNme}`).classList.add('disabled');
        this.setState({TextSize: 'medium'})
        
    }

    render(){
        return(
            <div className= "TeztSize">
                <button className="sml tiny ui button" onClick={this.onTextSizeChanged}>Small</button>
                <button className="mdm disabled tiny ui button" onClick={this.onTextSizeChanged}>Medium</button>
                <button className="lrg tiny ui button" onClick={this.onTextSizeChanged}>Large</button>
                
            </div>
        )
    }
}

export default TextSize;