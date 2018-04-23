import React, { Component } from 'react';
import './Partner.css';

class Partner extends Component {
    constructor() {
        super();
        this.state ={
            universities: [],
            isLoading :false
        }
    }

    componentDidMount(){
        this.setState({isLoading:true});
        fetch('https://syst-api.azurewebsites.net/universities')
        .then(result => result.json())
        .then(json => {
            json.forEach((universities)=>{
                if(universities.name !== ("IT University of Copenhagen")){
                    this.setState(uni =>({
                        universities: [...uni.universities, universities]
                    }))
                }
            })
        })
        .catch(error =>{
            this.setState({
                universities:[error]
            })
        })
        this.setState({isLoading:false});
    }

    render() {
        const {universities, isLoading} = this.state;
        if(isLoading){
            return(<p>Loading...</p>);
        }; 
        return (
            <div>
                <h1>Partners of ITU</h1>
                <ul>
                    {universities.map((uni,i) => {
                       return <li key={i}><p>{uni.name}</p></li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Partner