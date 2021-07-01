
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
  constructor() {
    super();
    this.state = {
      title: "Hello From Bridgelab"
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src = {logo}/>
      </div>
    );
  }
}
export default App;
