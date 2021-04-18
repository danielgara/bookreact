import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Greeting from "./Greeting";
import Greeting from "./GreetingFunctional";

class App extends React.Component {
  
  state: { enteredName: string, message: string}

  constructor(props:any) {
    super(props);

    this.state = {
      enteredName: "",
      message: ""
    }

    this.onChangeName = this.onChangeName.bind(this);
  }

  onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    const eName = e.target.value;
    this.setState({
      enteredName: eName,
      message: `Hello from, ${eName}`
    });
  }

  render() {
      console.log("rendering App");

      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input value={this.state.enteredName} onChange={this.onChangeName} />
          <Greeting message={this.state.message} />
        </header>
      </div>
    )
  }
}

export default App;