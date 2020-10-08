import React, { Component } from 'react';
import RandomUser from './components/RandomUser';
import './App.css';
import UserData from './userData';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { userData: [] }
  };

  loadData = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    return data;

  }

  async componentDidMount() {
    console.log("Component mounted");
    const userData = await this.loadData(); 

    this.setState({
      userData: userData.results,
    });
  }

  render() {
    let RenderUser;
    if (this.state.userData.length) {
      RenderUser = <RandomUser userData={this.state.userData[0]} />;
    } else {
      RenderUser = <p>No User Data</p>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Random User</h1>
        </header>
        {RenderUser}
      </div>
    );
  }
}

export default App;
