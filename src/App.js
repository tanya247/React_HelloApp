
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
      username: ""
    }
  }
  onClick = ($event) => {
    console.log("Button is clicked ",$event)
    window.open(this.url,"_blank");
  }
  onNameChange = ($event) =>{
    console.log("Username is : ",$event.target.value)
    this.setState({username:$event.target.value})
  }
  render() {
    return (
      <>
      <div>
        <h1>Hello {this.state.username} from Bridgelabz</h1>
        <img src = {logo} onClick = {this.onClick}/>
      </div>

      <div className = "text-box">
        <input onChange = {this.onNameChange}/>
      </div>
      </>
    );
  }
}
export default App;
