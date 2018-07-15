import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import quoteList from './quoteList.json';


class App extends Component {

constructor(props){
  super(props);
  this.state={
     quoteList:[]
  };
}

getNewQuote(){
  axios.get('https://gist.githubusercontent.com/benchprep/dffc3bffa9704626aa8832a3b4de5b27/raw/b191cf3b6ea9cdcca8b363516ff969261398061f/quotes.json')
  .then(({data})=> {
    this.setState({
      quoteList:data
    });
})
  .catch((err) => {})
}

componentDidMount(){
  this.getNewQuote();
}

  render() {
    return ([
 
      <div className="App">
        <header className="App-header">
           <h1 className="App-title">React List</h1>
           <h1 className="App-title"> Denise Appler Erazmus </h1>
        </header>  
        <table>
          <thead>
            <tr>
              <th>Source</th>
              <th>Context</th>
              <th>Quote</th>
              <th>Theme</th>
            </tr>
          </thead>
          <tbody>
          {
            quoteList.map(row =>(
              <tr>
                <td>{row.source}</td>
                <td>{row.context}</td>
                <td>{row.quote}</td>
                <td>{row.theme}</td>
              </tr>
              ))
          }
          </tbody>
        </table>
      </div>
      
   ]);
  }
}

export default App;
