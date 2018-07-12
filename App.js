import React from 'react';
import Investor from './components/Investor'
import './style/App.css';



class App extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }



    render(){
        return(
            <div className="calc">
                <div className="calcTitleDiv">
                    <span className="calcTitle"> Interest Calculator of आपली बँक </span>
                </div>
                <Investor/>
                <div className="mainContainer">
                    <p> </p>
                </div>
            </div>
        );
    }

}
export default App;