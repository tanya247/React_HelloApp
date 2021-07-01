
import './App.css';
import React from 'react';
import logo from './Assets/logo.png';

//class App extends React.Component {
// render(){
//   return(
//     <div>
//       <h1>Hello From Bridgelabz</h1>
//     </div>
//   )
// }
class App extends React.Component {
  url = 'https://www.bridgelabz.com/'
  constructor() {
    super();
    this.state = {
      title: "Hello From Bridgelab"
    }
  }
  onClick = ($event) => {
    console.log("Button is clicked ",$event)
    window.open(this.url,"_blank");
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src = {logo} onClick = {this.onClick}/>
      </div>
    );
  }
}
export default App;
