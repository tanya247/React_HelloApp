
import './App.css';
import React from 'react';
import logo from './Assets/logo.png';
import RegExpExec from 'es-abstract/2015/RegExpExec';

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
      username: "",
      nameError: ""
    }
  }
  onClick = ($event) => {
    console.log("Button is clicked ",$event)
    window.open(this.url,"_blank");
  }
  onNameChange = ($event) =>{
    console.log("Username is : ",$event.target.value)
    const nameRegex = RegExp('^[A-Z]{1}[A-Za-z//s]{2,}$')
    this.setState({username:$event.target.value})
    if(nameRegex.test($event.target.value)){
      this.setState({nameError:""})
    }else{
      this.setState({nameError:"Name is Incorrect"})
    }
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
        <span className = "text-error">{this.state.nameError}</span> 
      </div>
      </>
    );
  }
}
export default App;
