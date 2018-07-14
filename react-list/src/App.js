import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


class App extends Component {

constructor(props){
  super(props);
  this.state={
    data: null,
      quotesList: [],
      currentPage: 1,
      quotesPerPage: 15,
      theme: '',
      search: '',
  }
}

getNewQuote(){
  axios.get('https://gist.githubusercontent.com/benchprep/dffc3bffa9704626aa8832a3b4de5b27/raw/b191cf3b6ea9cdcca8b363516ff969261398061f/quotes.json')
  .then((response)=>this.setState({quote:response.data}))
}

componentDidMount(){
  this.getNewQuote();
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
           <h1 className="App-title">React List</h1>
          <h2> By Denise Appler Erazmus </h2>
        </header>
        
    </div>
   
    );
  }
}

export default App;
