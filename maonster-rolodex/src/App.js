import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

//function App() {
//Switching from Function to Class
class App extends Component {
  constructor() {
    //It calls constructor method on Component Class which gives access to this.state
    super();
    //this.state exists on our class 'App' and we can set it to something.
    this.state = {
      monsters: [],
      searchField: " "
    };
    //If we use arrow function, we don't need to bind it.
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    //makes an API request ot that URL
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  //In case if we want to use handleChnage more than one time.
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  //Adding Component gives us access to render() function
  //map() function iterates over every member of the object/array
  render() {
    const { monsters, searchField } = this.state;
    //This is equivale to
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;

    //Now we will get a new array which is based on the function passed into it
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList
          monsters={filteredMonsters} //monsters={this.state.monsters}
        />
      </div>
    );
  }
}

export default App;

/*
 <input
          type="search"
          placeholder="Search Monsters"
          onChange={e => this.setState({ searchField: e.target.value })}
        />
*/
